/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('adminoffice', {
      idadminoffice: {
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      address: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING(15),
        allowNull: false
      }
    }, {
      timestamps: false,
      sequelize,
      timestamps: false,
      tableName: 'adminoffice'
    });
  };