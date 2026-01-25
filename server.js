// const express = require("express")
// const app = express()
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const app = express()

mongoose.set("strictQuery", true)

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("✅ Connected to MongoDB")
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message)
  }
}

// 👇 VERY IMPORTANT
connect()

app.get("/", (req, res) => {
  res.send("Backend is running 🚀")
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`)
})
