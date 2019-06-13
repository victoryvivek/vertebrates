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

mongoose.model("Vertebrate", vertebrateSchema);