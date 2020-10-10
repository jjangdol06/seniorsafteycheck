/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('state', {
      idstate: {
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      state: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        unique: "state_UNIQUE"
      }
    }, {
      sequelize,
      timestamps: false,
      tableName: 'state'
    });
  };