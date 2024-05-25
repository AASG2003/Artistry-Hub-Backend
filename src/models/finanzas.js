const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('finanzas', {
    id_finanzas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    },
    id_criptomoneda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'criptomonedas',
        key: 'id_criptomoneda'
      }
    },
    lista_ventas: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    wallets: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    media_ganancias: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    grafica_mensual: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mediana_ganancias: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rating_confiabilidad: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'finanzas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_finanzas" },
        ]
      },
      {
        name: "billetera_usuario_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "billetera_usuario_ibfk_2",
        using: "BTREE",
        fields: [
          { name: "id_criptomoneda" },
        ]
      },
    ]
  });
};
