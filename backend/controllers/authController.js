const User = require("../models/userModel");

exports.registerUser = async (req, res) => {
  const { name, email, phone, role } = req.body;
  try {
    console.log("name",name)
    const newUser = await User.create({ name, email, phone, role });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
};

exports.loginUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ where: { email} });
    if (user) {
      res.status(200).json({ message: "Login successful", user });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to login" });
  }
};

exports.logoutUser = (req, res) => {
  res.status(200).json({ message: "Logout successful" });
};
