const express = require("express");
const registerUser = require("../controllers/registerUser");
const LoginUser = require("../controllers/loginUser");
const router = express.Router();
const formidable = require("express-formidable");

router.post("/register", registerUser);
router.post("/login", LoginUser);

module.exports = router;
