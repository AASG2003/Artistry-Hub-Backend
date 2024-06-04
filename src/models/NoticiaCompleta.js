import mongoose from "mongoose";
const { Schema } = mongoose;

const noticiaCompletaSchema = new Schema({
  titulo: {
    type: String,
    required: true
  },
  enlace: {
    type: String,
    required: true
  },
  temas: {
    type: String,
    required: true
  },
  cripto: {
    type: String,
    required: true
  },
  'fecha-consulta': {
    type: Date,
    required: true
  }
});

const NoticiaCompleta = mongoose.model('NoticiaCompleta', noticiaCompletaSchema);

export default NoticiaCompleta;
