const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("Teacher", "Student", "Institute"),
    allowNull: false,
  },
});

sequelize.sync()
  .then(() => console.log("User table created."))
  .catch((err) => console.error("Error creating table:", err));

module.exports = User;
