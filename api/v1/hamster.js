const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const hamsterSchema = require('../../db/schemas/hamster');

router.get('/', (req, res) => {
    const Hamster = mongoose.model('Hamster', hamsterSchema);
    const username = req.body.username;
    const password = req.body.password;

    Hamster.find({
        username
    }, (e, hamsters) => {
        if (hamsters.length === 0) {
            bcrypt.hash(password, 10, function (e, hash) {
                addNewUser(username, hash, res, Hamster, req);
            });
        } else {
            res.status(200).send({
                authenticated: false,
                message: "Username Taken",
                username: null
            });
        }
    });
});

router.get('/all', (req, res) => {
    const Hamster = mongoose.model('Hamster', hamsterSchema);

    Hamster.find({}, (err, hamsters) => {
        hamsters = hamsters.map(hamster => {
            return {
                _id: hamster._id,
                username: hamster.username,
                createdDate: hamster.createdDate
            }
        })
        res.status(200).send({
            hamsters
        });
    });
});

router.post('/', (req, res) => {
    const Hamster = mongoose.model('Hamster', hamsterSchema);
    const username = req.body.username;
    const password = req.body.password;

    Hamster.find({ username: username }, (e, hamsters) => {
        if (hamsters.length === 0) {
            // password / salt rounds
            bcrypt.hash(password, 10, function (e, hash) {
                addNewUser(username, hash, res, Hamster, req);
            });
        }
        else {
            res.status(200).send({
                authenticated: false,
                message: "Username Taken",
                username: null
            });
        }
    });
});

addNewUser = (username, hash, res, Hamster, req) => {
    const newHamster = new Hamster({
        username,
        password: hash,
        createdDate: Date.now()
    });

    newHamster.save(() => {
        req.session.auth = true;
        req.session.username = username;
        res.status(200).send({
            authenticated: true,
            message: "Hamster Created",
            username
        });
    });
}

module.exports = router;