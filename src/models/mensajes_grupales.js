const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mensajes_grupales', {
    id_mensaje_chat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_chat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'chats_grupales',
        key: 'id_chat'
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
    },
    miembro_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'miembros_grupo',
        key: 'id_miembro'
      }
    }
  }, {
    sequelize,
    tableName: 'mensajes_grupales',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_mensaje_chat" },
        ]
      },
      {
        name: "mensajes_grupales_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "id_chat" },
        ]
      },
      {
        name: "miembros_msjgrupales_fk",
        using: "BTREE",
        fields: [
          { name: "miembro_id" },
        ]
      },
    ]
  });
};
