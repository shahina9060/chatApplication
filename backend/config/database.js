const { Sequelize } = require("sequelize");
const dotenv = require('dotenv')
dotenv.config()

// console.log("Database:", process.env.database);
// console.log("Username:", process.env.username);
// console.log("Password:", process.env.password);

// const sequelize = new Sequelize("messaging_app", "root", "root", {
const sequelize = new Sequelize(process.env.database, process.env.user_name, process.env.password, {
  host: "localhost",
  dialect: "mysql",
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected...");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};

module.exports = { sequelize, connectDB };
