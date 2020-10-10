/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('', {
      iddetail: {
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      detailname: {
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