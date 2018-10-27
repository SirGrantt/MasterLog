const Sequelize = require('sequelize');

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

  connection
    .sync({
      logging: console.log,
    })
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => console.error('Unable to connect to the database:', err));
}

module.exports = connectDb;
