const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const postSchema = require('../../db/schemas/post');

router.post('/', (req, res) => {
    const Post = mongoose.model('Post', postSchema);

    const newPost = new Post({
        username: req.body.username,
        title: req.body.name,
        content: JSON.stringify(req.body.content),
        createdDate: Date.now()
    });

    newPost.save(() => {
        res.sendStatus(200);
    });
});

module.exports = router;