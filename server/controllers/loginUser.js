const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const LoginUser = async (req, res) => {
	// const { data } = req.body;
	console.log(req.body.dataa);
	const { email, password } = req.body.dataa;
	console.log(email);
	const user = await User.findOne({ email });
	console.log(user);
	if (!user) res.json("No users found");
	const validPassword = bcrypt.compare(password, user.password);
	if (!validPassword) res.status(400).send("Incorrect Password");
	const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
		expiresIn: "7d",
	});
	res.json({
		user,
		token,
	});
};
module.exports = LoginUser;
