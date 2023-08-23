import { router } from "./routes/subscribers";
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();
const uri = process.env.MONGO_URL as string;

const app: Express = express();

mongoose.connect(uri)
const db = mongoose.connection;

db.on("error", (error: String) => console.log(error));
db.once("open", () => console.log("connected to database"));

app.use(express.json());

app.use("/subscribers", router)


app.listen(3000, () => console.log("Server Started"));