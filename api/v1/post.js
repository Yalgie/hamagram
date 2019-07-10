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
        createdDate: Date.now(),
    });

    newPost.save(() => {
        res.sendStatus(200);
    });
});

router.post('/like', (req, res) => {
    const Post = mongoose.model('Post', postSchema);

    Post.findByIdAndUpdate(req.body._id, {
        ...req.body
    }, {
        new: true,
        useFindAndModify: false,
    }, () => {
        // Once post updated return all posts to frontend
        // Would do this in a more efficient way normally
        // Most likely I'd pass the modidied post back to the frontend
        // Compare the redux state with the new post id and update just that one
        Post.find({}, (err, posts) => {
            res.status(200).send({
                posts,
            });
        });
    });
});

router.get('/', (req, res) => {
    const Post = mongoose.model('Post', postSchema);

    Post.find({}, (err, posts) => {
        res.status(200).send({
            posts,
        });
    });
});

module.exports = router;
