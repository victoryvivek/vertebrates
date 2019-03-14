const express = require('express');
const path = require('path');

const router = express.Router();

router.get("/home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "static", "Home.html"));
});

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'static', 'landing.html'));
});

module.exports = router;