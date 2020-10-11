/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('senior', {
      idsenior: {
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
      },
      province: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      district: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      gender: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      socialworker_idsocialworker: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: {
            tableName: 'socialworker',
          },
          key: 'idsocialworker'
        },
        unique: "fk_senior_socialworker"
      },
    }, {
      sequelize,
      timestamps: false,
      tableName: 'senior'
    });
  };