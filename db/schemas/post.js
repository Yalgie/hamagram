const mongoose = require('mongoose');

const post = new mongoose.Schema({
    username: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    createdDate: {
        type: Date
    }
});

module.exports = post;