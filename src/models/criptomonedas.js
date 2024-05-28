import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'
export const criptoCoins = sequelize.define('criptomonedas', {
    id_criptomoneda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    siglas: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'criptomonedas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_criptomoneda" },
        ]
      },
    ]
  });
