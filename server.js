require('./models/db1');

const express = require('express');

var app = express();

app.listen(3000, () => {
    console.log('express server started at port : 3000');
});