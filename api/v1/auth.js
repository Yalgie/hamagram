const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const hamsterSchema = require('../../db/schemas/hamster');

router.post('/', (req, res) => {
    const isAuth = req.session.auth;
    
    if (isAuth) {
        res.status(200).send({
            authenticated: true,
            message: null,
            username: req.session.username
        });
    }
    else {
        res.status(200).send({
            authenticated: false,
            message: null,
            username: null
        });
    }
});

router.post('/login', (req, res) => {
    const Hamster = mongoose.model('Hamster', hamsterSchema);
    const username = req.body.username;
    const password = req.body.password;
   
    Hamster.find({ username: username }, (e, hamsters) => {
        // If we can't find a user with the provided username
        if (hamsters.length === 0) {
            res.status(200).send({
                authenticated: false,
                message: "User Not Found",
                username: null
            })
        }
        // Comparing the stored hash with the provided password
        else {
            const hash = hamsters[0].password;
        
            bcrypt.compare(password, hash, function(err, isAuth) {
                if (isAuth) {
                    req.session.auth = true;
                    req.session.username = username;
                    res.status(200).send({
                        authenticated: true,
                        message: "Logged In",
                        username
                    })
                }
                else {
                    res.status(200).send({
                        authenticated: false,
                        message: "Password Incorrect",
                        username: null
                    })
                }
            });
        }
    });    
});

router.post('/logout', (req, res) => {
    req.session.auth = false;
    req.session = null;
    res.status(200).send({
        authenticated: false,
        message: "Logged Out",
        username: null
    });
});

module.exports = router;