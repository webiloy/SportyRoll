const express = require("express");
const router = express.Router();
const path = require("path");
// optional router path ^/$|index(.html)?
router.get("^/$|index(.html)?", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});
module.exports = router;
