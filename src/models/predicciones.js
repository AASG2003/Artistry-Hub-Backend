const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('predicciones', {
    id_prediccion: {
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
    fecha_prediccion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    valor_predicho: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'predicciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_prediccion" },
        ]
      },
      {
        name: "predicciones_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "id_criptomoneda" },
        ]
      },
    ]
  });
};
