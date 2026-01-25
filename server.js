// const express = require("express")
// const app = express()
import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import "dotenv/config.js"

const app = express()
dotenv.config()

mongoose.set("strictQuery", true)

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log("Connected to MongoDB")
  } catch (err) {
    console.log("Error connecting to MongoDB:", err)
  }
}

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
