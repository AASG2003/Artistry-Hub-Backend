import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

export const quotes = sequelize.define('cotizaciones', {
    id_cotizacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_criptomoneda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'criptomonedas',
        key: 'id_criptomoneda'
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    precio: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cotizaciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cotizacion" },
        ]
      },
      {
        name: "cotizaciones_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "id_criptomoneda" },
        ]
      },
    ]
  });
