const User = require("../models/User");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
	try {
		const { email, name, phone, password } = req.body;
		if (!email) res.status(400).send("email is required");
		if (!name) res.status(400).send("name is required");
		if (!password) res.status(400).send("password is required");
		if (!phone) res.status(400).send("phone is required");
		const exist = await User.findOne({ email });
		if (exist) res.status(200).send("Email is already taken");
		const user = await new User({ name, email, phone, password });
		const salt = await bcrypt.genSalt(12);
		user.password = await bcrypt.hash(user.password, salt);
		user.save();
		// user.password = undefined;
		await res.json({
			ok: "true",
			user,
		});
	} catch (err) {
		res.json({
			message: "error",
		});
	}
};
module.exports = registerUser;