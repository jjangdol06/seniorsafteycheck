/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('senior_has_disease', {
    senior_idsenior: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'senior',
        },
        key: 'idsenior'
      }
    },
    disease_iddisease: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'disease',
        },
        key: 'iddisease'
      }
    }
  }, {
    sequelize,
    tableName: 'senior_has_disease'
  });
};
