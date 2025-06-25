const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
//   console.log("User registered");
  res.json({ message: "User registered successfully" });
});

module.exports = router;
