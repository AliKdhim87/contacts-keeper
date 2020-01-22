const express = require("express");
const router = express.Router();

// @route      GET api/contacts
// @desc       GET all users contacts
// @access     Private
router.get("/api/contacts", (req, res) => {
  res.send("get all contacts");
});

// @route      POST api/contacts
// @desc       Add new contact
// @access     Private
router.post("/api/contacts", (req, res) => {
  res.send("Add contact");
});

// @route      PUT api/contacts/:id
// @desc       Update contact
// @access     Private
router.put("/api/contacts/:id", (req, res) => {
  res.send("update contact");
});
// @route      DELETE api/contacts/:id
// @desc       Delete contact
// @access     Private
router.delete("/api/contacts/:id", (req, res) => {
  res.send("Delete contact");
});
module.exports = router;
