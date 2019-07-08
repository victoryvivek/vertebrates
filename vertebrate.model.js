const mongoose = require('mongoose');
var vertebrateSchema = new mongoose.Schema( {
    name: {
        type: String
    },
    time: {
        type: String
    },
    description: {
        type: String
    }
});

var vertebrate=mongoose.model("Vertebrate", vertebrateSchema);
module.exports=vertebrate