import express from "express"
import config from "config"
import mongoose from "mongoose"
import cors from "cors"

import { authRouter } from "./routes/auth.routes.js" // наш роутер

const app = new express()
app.use(cors())
app.use("/auth", authRouter)
app.use(express.json())

const PORT = config.get("port") || 8000

mongoose.set("strictQuery", false)

async function start() {
  try {
    await mongoose.connect(config.get("mongoURL"))
    console.log("Database connection is complited")

    app.listen(PORT, () => {
      console.log(`Server is working on PORT ${PORT}...`)
    })
  } catch (error) {
    console.log(`Server error ${error.message}`)
  }
}

start()
