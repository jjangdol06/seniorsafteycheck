/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('service', {
      idservice: {
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      servicetype: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 0
      }
    }, {
      sequelize,
      tableName: 'service'
    });
  };