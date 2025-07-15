const { Sequelize } = require('sequelize');

// Ubah sesuai dengan konfigurasi MySQL kamu
const sequelize = new Sequelize('nama_database', 'username_mysql', 'password_mysql', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;
