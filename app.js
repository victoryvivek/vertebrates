const path = require('path');
const express = require('express');
const app = express();

const amphibianRoutes = require('./routes/amphibians');
const indexRoutes = require('./routes/index');

const x=5;

app.use(indexRoutes);
app.listen(3000);