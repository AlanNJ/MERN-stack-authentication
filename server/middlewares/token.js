const jwt = require("express-jwt");
const requireSignIn = jwt({
	secret: process.env.JWT_SECRET,
	algorithms: ["HS256"],
});
module.exports = requireSignIn;
