const mongoose = require("mongoose");

const { Schema } = mongoose;

const User = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
	},
	about: {},
	followers: [
		{
			type: Schema.ObjectId,
			ref: "User",
		},
	],
	following: [
		{
			type: Schema.ObjectId,
			ref: Schema.ObjectId,
		},
	],
});
module.exports = mongoose.model("User", User);
