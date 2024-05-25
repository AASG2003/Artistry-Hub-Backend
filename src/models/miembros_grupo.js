const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('miembros_grupo', {
    id_miembro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_grupo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'grupos',
        key: 'id_grupo'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    }
  }, {
    sequelize,
    tableName: 'miembros_grupo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_miembro" },
        ]
      },
      {
        name: "miembros_grupo_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "id_grupo" },
        ]
      },
      {
        name: "miembros_grupo_ibfk_2",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
};
