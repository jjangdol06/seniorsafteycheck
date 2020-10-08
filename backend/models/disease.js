/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('disease', {
      iddisease: {
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      diseasename: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: "diseasecode_UNIQUE"
      },
      risk: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'disease'
    });
  };