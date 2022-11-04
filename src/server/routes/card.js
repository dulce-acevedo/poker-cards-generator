const express = require("express");
const https = require("https");
const router = express.Router();
const { persistance } = require("../services/flickrApi");

// Route
router.get("/:query", async (req, res) => {
  theme = encodeURI(req.params.query);
  cardKey = `CardKey:${theme}`;
  persistance(res, theme, cardKey);
});


module.exports = router;
