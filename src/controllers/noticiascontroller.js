const NoticiaCompleta = require('../models/NoticiaCompleta');

// Obtener noticias completas por cripto
exports.getNoticiasCompletas = async (req, res) => {
  const { resul } = req.query;

  try {
    const noticias = await NoticiaCompleta.find({ cripto: resul });
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
