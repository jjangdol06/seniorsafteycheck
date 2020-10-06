const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config
  );

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Adminoffice = require('./adminoffice')(sequelize, Sequelize);
db.Call = require('./call')(sequelize, Sequelize);
db.Disease = require('./disease')(sequelize, Sequelize);
db.Family = require('./family')(sequelize, Sequelize);
db.Senior_has_disease = require('./senior_has_disease')(sequelize, Sequelize);
db.Senior = require('./senior')(sequelize, Sequelize);
db.Service = require('./service')(sequelize, Sequelize);
db.Socialworker = require('./socialworker')(sequelize, Sequelize);
db.State = require('./state')(sequelize, Sequelize);
db.Visit = require('./visit')(sequelize, Sequelize);

module.exports = db;