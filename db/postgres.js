const uuid = require('uuid/v4');
const Sequelize = require('sequelize');
const user = require('./Models/User');

function connectDb() {
  const connection = new Sequelize('masterlog', 'pgadmin', 'pgpass', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    // pool: {
    // max: 5,
    //  min: 0,
    //  acquire: 30000,
    //  idle: 10000
    // },
  });

  const userModel = user(connection, Sequelize);

  connection
    .sync({
      logging: console.log,
    })
    .then(() => {
      userModel.create({
        username: 'SirGrantt',
        id: uuid(),
      });
    })
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => console.error('Unable to connect to the database:', err));
}

module.exports = connectDb;
