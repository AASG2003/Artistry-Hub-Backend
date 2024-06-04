import NoticiaCompleta from '../models/NoticiaCompleta.js'

// Obtener noticias completas por cripto
const getNoticiasCompletas = async (req, res) => {
  try {
    const { resul } = req.query;
    const noticias = await NoticiaCompleta.find({ cripto: resul }).toArray();
    if (noticias.length > 0) {
      res.json(noticias);
    } else {
      res.status(404).json({ error: "El activo especificado no fue encontrado." });
    }
  } catch (error) {
    console.error('Error al consultar la base de datos:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};


export default getNoticiasCompletas