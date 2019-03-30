const express = require('express')
const path = require("path")

const router = express.Router();
router.get('/mammals', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../static/mammals.html"));
});

exports.router = router;