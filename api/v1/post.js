const express = require('express');
const router = express.Router();
const chalk = require('chalk');
const sucess = chalk.bold.green;
const mongoose = require('mongoose');
const postSchema = require('../../db/schemas/post');

router.post('/', (req, res) => {
    const Post = mongoose.model('Post', postSchema);

    const newPost = new Post({
        username: req.body.username,
        title: req.body.title,
        content: JSON.stringify(req.body.content),
        createdDate: Date.now()
    });

    console.log(sucess(`Post: ${req.body.title} Created`))

    newPost.save(() => {
        res.sendStatus(200);
    });
});

router.get('/', (req, res) => {
    const Post = mongoose.model('Post', postSchema);

    Post.find({}, (err, posts) => {
        res.status(200).send({
            posts
        });
    });
});

module.exports = router;