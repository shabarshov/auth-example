import Router from "express"
import express from "express"

import { registerValidation } from "../validations/auth.js"
import { validationResult } from "express-validator"

import bcrypt from "bcryptjs"
import config from "config"
import cors from "cors"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

const router = Router()
router.use(express.json())
router.use(cors())

router.post("/register", registerValidation, async (req, res) => {
  try {
    const errors = validationResult(req)

    const { email, password } = req.body

    const isEmailExist = await User.findOne({ email: email })

    if (isEmailExist) {
      return res.status(400).json({ message: "This user already exist" })
    }

    if (!errors.isEmpty()) {
      console.log(errors)
      return res.status(400).json(errors.array().map((error) => error.msg))
    }

    const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10))

    const user = new User({
      email: email,
      password: hashedPassword,
    })

    await user.save()

    return res.status(201).json({ message: "User created" })
  } catch (error) {
    return res.status(500).json({ message: "Something wrong, try again" })
  }
})

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email: email })

    if (!user) {
      return res.status(400).json({ message: "User is not found" })
    }

    const passwordsIsMatch = await bcrypt.compare(password, user.password)

    if (!passwordsIsMatch) {
      return res.status(400).json({ message: "Incorrect password, try again" })
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      config.get("jwtSecret"),
      {
        expiresIn: "30d",
      }
    )

    return res.json({ token, userId: user.id })
  } catch (error) {
    return res.status(500).json({ message: "Something wrong, try again" })
  }
})

export { router as authRouter }
