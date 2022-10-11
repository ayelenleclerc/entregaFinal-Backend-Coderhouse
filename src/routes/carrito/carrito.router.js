const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`<h1>Welcome! desde ${req.baseUrl}</h1>`);
});

module.exports = router;
