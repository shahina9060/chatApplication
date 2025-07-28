const { Sequelize } = require("sequelize");
const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize(process.env.database, process.env.user_name, process.env.password, {
  host: process.env.host,
  dialect:process.env.dialect,
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
