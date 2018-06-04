const Sequelize = require('sequelize');

const db = new Sequelize('shipping_billing', 'biosync', 'paololuis8593', {
  host: 'localhost',
  dialect: 'postgres'
});

db.authenticate()
  .then(() => {
    console.log('connected to database');
  })
  .catch(err => {
    console.log('unable to connect to database ', err);
  })

module.exports = {
  db: db
};
