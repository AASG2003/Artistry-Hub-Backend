var DataTypes = require("sequelize").DataTypes;
var _administrador = require("./administrador");
var _chats_grupales = require("./chats_grupales");
var _cotizaciones = require("./cotizaciones");
var _criptomonedas = require("./criptomonedas");
var _finanzas = require("./finanzas");
var _grupos = require("./grupos");
var _mensajes = require("./mensajes");
var _mensajes_grupales = require("./mensajes_grupales");
var _miembros_grupo = require("./miembros_grupo");
var _predicciones = require("./predicciones");
var _registro_conexion = require("./registro_conexion");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var administrador = _administrador(sequelize, DataTypes);
  var chats_grupales = _chats_grupales(sequelize, DataTypes);
  var cotizaciones = _cotizaciones(sequelize, DataTypes);
  var criptomonedas = _criptomonedas(sequelize, DataTypes);
  var finanzas = _finanzas(sequelize, DataTypes);
  var grupos = _grupos(sequelize, DataTypes);
  var mensajes = _mensajes(sequelize, DataTypes);
  var mensajes_grupales = _mensajes_grupales(sequelize, DataTypes);
  var miembros_grupo = _miembros_grupo(sequelize, DataTypes);
  var predicciones = _predicciones(sequelize, DataTypes);
  var registro_conexion = _registro_conexion(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  mensajes_grupales.belongsTo(chats_grupales, { as: "id_chat_chats_grupale", foreignKey: "id_chat"});
  chats_grupales.hasMany(mensajes_grupales, { as: "mensajes_grupales", foreignKey: "id_chat"});
  cotizaciones.belongsTo(criptomonedas, { as: "id_criptomoneda_criptomoneda", foreignKey: "id_criptomoneda"});
  criptomonedas.hasMany(cotizaciones, { as: "cotizaciones", foreignKey: "id_criptomoneda"});
  finanzas.belongsTo(criptomonedas, { as: "id_criptomoneda_criptomoneda", foreignKey: "id_criptomoneda"});
  criptomonedas.hasMany(finanzas, { as: "finanzas", foreignKey: "id_criptomoneda"});
  predicciones.belongsTo(criptomonedas, { as: "id_criptomoneda_criptomoneda", foreignKey: "id_criptomoneda"});
  criptomonedas.hasMany(predicciones, { as: "predicciones", foreignKey: "id_criptomoneda"});
  miembros_grupo.belongsTo(grupos, { as: "id_grupo_grupo", foreignKey: "id_grupo"});
  grupos.hasMany(miembros_grupo, { as: "miembros_grupos", foreignKey: "id_grupo"});
  mensajes_grupales.belongsTo(miembros_grupo, { as: "miembro", foreignKey: "miembro_id"});
  miembros_grupo.hasMany(mensajes_grupales, { as: "mensajes_grupales", foreignKey: "miembro_id"});
  finanzas.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(finanzas, { as: "finanzas", foreignKey: "id_usuario"});
  mensajes.belongsTo(usuarios, { as: "id_emisor_usuario", foreignKey: "id_emisor"});
  usuarios.hasMany(mensajes, { as: "mensajes", foreignKey: "id_emisor"});
  mensajes.belongsTo(usuarios, { as: "id_receptor_usuario", foreignKey: "id_receptor"});
  usuarios.hasMany(mensajes, { as: "id_receptor_mensajes", foreignKey: "id_receptor"});
  miembros_grupo.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(miembros_grupo, { as: "miembros_grupos", foreignKey: "id_usuario"});
  registro_conexion.belongsTo(usuarios, { as: "usuarios_id_usuario_usuario", foreignKey: "usuarios_id_usuario"});
  usuarios.hasMany(registro_conexion, { as: "registro_conexions", foreignKey: "usuarios_id_usuario"});

  return {
    administrador,
    chats_grupales,
    cotizaciones,
    criptomonedas,
    finanzas,
    grupos,
    mensajes,
    mensajes_grupales,
    miembros_grupo,
    predicciones,
    registro_conexion,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
