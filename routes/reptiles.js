const express = require('express')
const path = require("path")

const router = express.Router();
router.get('/reptiles', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../static/reptiles.html"));
});

exports.router = router;