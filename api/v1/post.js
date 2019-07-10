const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const postSchema = require('../../db/schemas/post');

router.post('/', (req, res) => {
    const Post = mongoose.model('Post', postSchema);

    const newPost = new Post({
        username: req.body.data.username,
        title: req.body.data.title,
        content: JSON.stringify(req.body.data.content),
        likes: req.body.data.likes,
        createdDate: Date.now(),
    });

    newPost.save(() => {
        Post.find({}, (err, posts) => {
            res.status(200).send({
                posts,
            });
        });
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
