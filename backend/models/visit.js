/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('visit', {
      idvisit: {
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
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
        unique: "fk_visit_socialworker1"
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
        unique: "fk_visit_senior1"
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: true
      },
      completed: {
        type: DataTypes.BOOLEAN,
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
        unique: "fk_visit_state1"
      },
      id: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: "id_UNIQUE"
      },
      password: {
        type: DataTypes.STRING(45),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'visit'
    });
  };