const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('registro_conexion', {
    idregistro_conexion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ip: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    fecha_hora_conexion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    usuarios_id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    }
  }, {
    sequelize,
    tableName: 'registro_conexion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idregistro_conexion" },
        ]
      },
      {
        name: "fk_registro_conexion_usuarios1_idx",
        using: "BTREE",
        fields: [
          { name: "usuarios_id_usuario" },
        ]
      },
    ]
  });
};
