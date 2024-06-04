import NoticiaCompleta from '../models/NoticiaCompleta.js'

// Obtener noticias completas por cripto
const getNoticiasCompletas = async (req, res) => {
  const { resul, skip = 0, limit = 10 } = req.query; // Valores por defecto
  const nombreColeccion = "resultados_de_comparasioon";
  
  try {
    const db = req.db;
    const coleccion = db.collection(nombreColeccion);
    
    // Consultar los datos en la colección con paginación
    const resultado = await coleccion.find({ cripto: resul })
                                     .skip(parseInt(skip))
                                     .limit(parseInt(limit))
                                     .toArray();
    
    if (resultado.length > 0) {
      res.json(resultado);
    } else {
      res.status(404).json({ error: "El activo especificado no fue encontrado." });
    }
  } catch (error) {
    console.error('Error al consultar la base de datos:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};


export default getNoticiasCompletas