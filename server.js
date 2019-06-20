require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const vertebratecontroller =require('./controllers/vertebratecontroller');

var app = express();
app.use(bodyparser.urlencoded({
    extended : true
}));
app.use(bodyparser.json());

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({extname:'hbs',defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine','hbs');
//app.post("/1",(req,res)=> {

//});

app.listen(3000, () => {
    console.log('express server started at port : 3000');
});

app.use('/vertebrate',vertebratecontroller);
