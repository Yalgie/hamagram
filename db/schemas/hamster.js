const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    createdDate: {
        type: Date
    }
});

module.exports = user;