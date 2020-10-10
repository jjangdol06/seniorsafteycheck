/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('detail', {
      iddetail: {
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      detailname: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: "detailname_UNIQUE"
      },
      risk: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      }
    }, {
      sequelize,
      timestamps: false,
      tableName: 'detail'
    });
  };