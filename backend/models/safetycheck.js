/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('safetycheck', {
      idsafetycheck: {
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      service_idservice: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: {
            tableName: 'service',
          },
          key: 'idservice'
        },
        unique: "fk_safetycheck_service1"
      },
      senior_idsenior: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: {
            tableName: 'senior',
          },
          key: 'idsenior'
        },
        unique: "fk_safetycheck_senior1"
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
        unique: "fk_safetycheck_socialworker1"
      },
      completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: true,
        defaultValue: 0
      },
      state_idstate: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: 3,
        references: {
          model: {
            tableName: 'state',
          },
          key: 'idstate'
        },
        unique: "fk_safetycheck_state1"
      }
    }, {
      sequelize,
      timestamps: true,
      tableName: 'safetycheck'
    });
  };