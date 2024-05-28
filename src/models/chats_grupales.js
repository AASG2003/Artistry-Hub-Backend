import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
export const groupChat = sequelize.define('chats_grupales', {
    id_chat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_chat: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'chats_grupales',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_chat" },
        ]
      },
    ]
  });
