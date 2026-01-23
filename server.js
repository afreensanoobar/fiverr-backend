// const express = require("express")
// const app = express()
import mongoose from "mongoose"
import dotenv from "dotenv"
import "dotenv/config.js"

dotenv.config()

import express from "express"
const app = express()
app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
import userRoutes from "./routes/userRoutes.js"

app.use(express.json())
app.use("/api/users", userRoutes)
