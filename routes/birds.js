const express = require('express')
const path = require("path")

const router = express.Router();
router.get('/birds', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../static/birds.html"));
});

exports.router = router;