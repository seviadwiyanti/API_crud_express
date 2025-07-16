const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Customer = sequelize.define(
  "Customer",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    belanja: DataTypes.INTEGER,
    alamat: DataTypes.STRING,
    jualan: DataTypes.STRING,
  },
  {
    tableName: "customers",
    timestamps: false,
  }
);

module.exports = Customer;
