const mongoose = require('mongoose');

const post = new mongoose.Schema({
    username: {
        type: String,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    likes: {
        type: Number,
    },
    createdDate: {
        type: Date,
    },
});

module.exports = post;
