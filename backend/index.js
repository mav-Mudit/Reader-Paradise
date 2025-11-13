import express from "express";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDB_URI;
try {
  mongoose.connect(URI, {});
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
