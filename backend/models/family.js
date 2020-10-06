/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('family', {
    idfamily: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    relation: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    senior_idsenior: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: {
          tableName: 'senior',
        },
        key: 'idsenior'
      },
      unique: "fk_family_senior1"
    }
  }, {
    sequelize,
    tableName: 'family'
  });
};
