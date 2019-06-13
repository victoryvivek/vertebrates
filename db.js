const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/VertebrateDB',{ useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.')}
    else { console.log('error in db connection : ' + err) }
});

require('./vertebrate.model');