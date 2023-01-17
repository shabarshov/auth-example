import { body } from "express-validator"

const registerValidation = [
  body("email", "Incorrect email").isEmail(),
  body("password", "Incorrect password (min length: 5)").isLength({ min: 5 }),
]

export { registerValidation }
