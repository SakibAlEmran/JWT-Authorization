//dependencies
const mongoose = require('mongoose');

//schema object
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive']
    }
});

//export 
module.exports = userSchema;