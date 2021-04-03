const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const bcryptjs = require("bcryptjs")
const { check, validationResult } = require("express-validator")
require("dotenv").config()

const User = require("../moduls/User")

// @route      POST api/users
// @desc       Regiter a user
// @access     Public
router.post(
  "/api/users",
  [
    check("name", "please add name").not().isEmpty(),
    check("email", "Pleace include a valid email").isEmail(),
    check(
      "password",
      "pleace enter a password with 6 or more caracters"
    ).isLength({
      min: 6,
    }),
  ],

  async (req, res) => {
    const error = validationResult(req)

    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() })
    }

    const { name, email, password } = req.body

    try {
      let user = await User.findOne({ email })

      if (user) {
        return res.status(400).json({ msg: "User already exists" })
      }

      user = new User({
        name,
        email,
        password,
      })

      const salt = await bcryptjs.genSalt(10)

      user.password = await bcryptjs.hash(password, salt)

      await user.save()

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
      res.status(500).send("server Error")
    }
  }
)
module.exports = router
