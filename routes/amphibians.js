const express = require('express')
const path = require("path")

const router = express.Router();
router.get('/amphibians', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../static/amphibians.html"));
});

module.exports = router;