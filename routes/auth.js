const express = require("express");
const router = express.Router();

// @route      GET api/auth
// @desc       GET / logged in user
// @access     Private
router.get("/api/auth", (req, res) => {
  res.send("Logged in user");
});

// @route      POST api/auth
// @desc       Auth user & get token
// @access     Public
router.post("/api/auth", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
