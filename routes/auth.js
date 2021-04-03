const express = require("express")
const router = express.Router()
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { check, validationResult } = require("express-validator")
require("dotenv").config()

const User = require("../moduls/User")
const auth = require("../middleware/auth")

// @route      GET api/auth
// @desc       GET / logged in user
// @access     Private
router.get("/api/auth", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password")
    res.json(user)
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Server Error")
  }
})

// @route      POST api/auth
// @desc       Auth user & get token
// @access     Public
router.post(
  "/api/auth",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required"),
  ],
  async (req, res) => {
    const error = validationResult(req)

    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() })
    }

    const { email, password } = req.body

    try {
      let user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" })
      }

      const isMatch = await bcryptjs.compare(password, user.password)
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" })
      }

      const payload = {
        user: {
          id: user.id,
        },
      }

      jwt.sign(
        payload,
        process.env.jwtSecret,
        {
          expiresIn: 360000,
        },
        (error, token) => {
          if (error) throw error
          res.json({ token })
        }
      )
    } catch (error) {
      console.error(error.message)
      res.status(500).send("Server error")
    }
  }
)

module.exports = router
