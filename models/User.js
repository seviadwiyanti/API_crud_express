const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');


const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
}, {
    tableName: 'users',
    timestamps: false,
});

module.exports = User;