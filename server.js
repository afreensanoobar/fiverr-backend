// const express = require("express")
// const app = express()
import mongoose from "mongoose";
import dotenv from "dotenv";
import "dotenv/config.js";

dotenv.config();

import express from "express";
const app = express()
app.listen(3000, () => {
  console.log("Server is running on port 3000")
});
import userRoutes from "./routes/userRoutes.js";

app.use(express.json());
app.use("/api/users", userRoutes);

const connect a ()
try{
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

