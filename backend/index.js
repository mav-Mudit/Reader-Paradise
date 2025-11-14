import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import bookRouter from "./Route/book.route.js";
const app = express();
app.use(cors());
dotenv.config();

const PORT = 4000;
const URI = process.env.MongoDB_URI;
try {
  mongoose.connect(URI, {});
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

app.use(express.json());
app.use("/book", bookRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
