const express = require("express");
const router = express.Router();
const { signup, login, logout } = require("../controllers/authController");

router.get("/signup", signup);
router.get("/login", login);
router.get("/logout", logout);
module.exports = router;
