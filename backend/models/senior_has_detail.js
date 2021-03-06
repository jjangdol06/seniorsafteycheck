/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('senior_has_detail', {
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
    detail_iddetail: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'detail',
        },
        key: 'iddetail'
      }
    }
  }, {
    sequelize,
    timestamps: false,
    tableName: 'senior_has_detail'
  });
};