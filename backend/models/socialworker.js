/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('socialworker', {
    idsocialworker: {
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
    id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "id_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    adminoffice_idadminoffice: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: {
          tableName: 'adminoffice',
        },
        key: 'idadminoffice'
      },
      unique: "fk_socialworker_adminoffice"
    },
    profileimg: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "정적파일 경로 추가"
    }
  }, {
    sequelize,
    tableName: 'socialworker'
  });
};
