import { router } from "./routes/subscribers";

require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
const db = mongoose.connection;

db.on("error", (error: String) => console.log(error));
db.once("open", () => console.log("connected to database"));

app.use(express.json());

app.use("/subscribers", router)


app.listen(3000, () => console.log("Server Started"));