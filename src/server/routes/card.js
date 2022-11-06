const express = require("express");
const https = require("https");
const router = express.Router();
const { flickrImages } = require("../services/flickrApi");

// Route
router.get("/:query", async (req, res) => {
  theme = encodeURI(req.params.query);
  cardKey = `CardKey:${theme}`;
  flickrImages(res, theme, cardKey);
});

module.exports = router;
