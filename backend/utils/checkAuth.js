import jwt from "jsonwebtoken"
import config from "config"

export default (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "")

  if (token) {
    try {
      const decoded = jwt.verify(token, config.get("jwtSecret"))

      req.userId = decoded._id

      next()
    } catch (error) {
      return res.status(403).json({
        message: "No access",
      })
    }
  } else {
    return res.status(403).json({
      message: "No access",
    })
  }
}
