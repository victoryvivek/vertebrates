const path = require('path');
const express = require('express');
const app = express();

const amphibianRoutes = require('./routes/amphibians');
const fishRoutes=require('./routes/fish');
const indexRoutes = require('./routes/index');
const premammalsRoutes=require('./routes/pre-mammals');
const mammalsRoutes = require('./routes/mammals');
const birdsRoutes = require('./routes/birds');
const reptilesRoutes = require('./routes/reptiles');

app.use(express.static(path.join(__dirname, 'public')));


app.use(amphibianRoutes);
app.use(fishRoutes.router);
app.use(premammalsRoutes.router);
app.use(mammalsRoutes.router);
app.use(birdsRoutes.router);
app.use(reptilesRoutes.router);
app.use(indexRoutes);
app.listen(3000);