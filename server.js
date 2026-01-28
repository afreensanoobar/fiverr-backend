import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("MongoDB Connected Successfully")
  } catch (err) {
    console.error("MongoDB Connection Failed:", err.message)
  }
}

connectDB()

app.get("/", (req, res) => {
  res.send("Backend is running 🚀")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
