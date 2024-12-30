const express = require("express");
const { registerUser, loginUser, logoutUser } = require("../controllers/authController");
const { getAllUsers, updateUser, deleteUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.get("/users", getAllUsers);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
