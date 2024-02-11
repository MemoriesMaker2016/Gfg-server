const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    number: {
        type: Number,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    city: {
        type: String,
        required:true
    },
    grade: {
        type: String,
        required:true
    },
});

const User = mongoose.model('USER', userSchema);

module.exports = User;