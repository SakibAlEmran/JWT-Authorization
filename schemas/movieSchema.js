//dependencies
const mongoose = require('mongoose');

//schema object
const movieSchema = mongoose.Schema({
    movie: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User"
    },    
});

//export 
module.exports = movieSchema;