const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//import cors from "cors";

const app = express();
require("dotenv").config();

mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		//useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(console.log("Db connected"))
	.catch((err) => {
		console.log("db", err);
	});
app.use(express.json({}));
app.use(
	cors({
		origin: ["http://localhost:3000"],
	})
);
app.use("/api", require("./routes/auth"));
app.listen(8000, () => console.log("Server listening on port 8000"));
