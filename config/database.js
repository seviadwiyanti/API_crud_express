const { Sequelize } = require('sequelize');

// Ubah sesuai dengan konfigurasi MySQL kamu
const sequelize = new Sequelize('express-api', 'root', 'qwerty', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});
module.exports = sequelize;
