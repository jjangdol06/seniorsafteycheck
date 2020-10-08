/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('call', {
      idcall: {
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
        unique: "fk_call_service1"
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
        unique: "fk_call_senior1"
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
        unique: "fk_call_socialworker1"
      },
      completed: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
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
        unique: "fk_call_state1"
      }
    }, {
      sequelize,
      tableName: 'call'
    });
  };