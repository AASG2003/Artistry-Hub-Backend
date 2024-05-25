const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mensajes', {
    id_mensaje: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_emisor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    },
    id_receptor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fecha_envio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'mensajes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_mensaje" },
        ]
      },
      {
        name: "mensajes_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "id_emisor" },
        ]
      },
      {
        name: "mensajes_ibfk_2",
        using: "BTREE",
        fields: [
          { name: "id_receptor" },
        ]
      },
    ]
  });
};
