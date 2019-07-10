const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const hamsterSchema = require('../../db/schemas/hamster');

// Checks if there is a current authenticated session
router.post('/', (req, res) => {
    const isAuth = req.session.auth;
    
    if (isAuth) {
        res.status(200).send({
            authenticated: true,
            username: req.session.username,
        });
    }
    else {
        res.status(200).send({
            authenticated: false,
            username: null,
        });
    }
});

router.post('/login', (req, res) => {
    const Hamster = mongoose.model('Hamster', hamsterSchema);
    const username = req.body.username;
    const password = req.body.password;
   
    Hamster.find({ username }, (e, hamsters) => {
        if (hamsters.length === 0) {
            // User Not Found
            res.status(200).send({
                authenticated: false,
                username: null
            })
        }
        else {
            const hash = hamsters[0].password;
            
            // Compares provided password with DB hash
            bcrypt.compare(password, hash, function(err, isAuth) {
                if (isAuth) {
                    req.session.auth = true;
                    req.session.username = username;
                    
                    res.status(200).send({
                        authenticated: true,
                        username,
                    });
                }
                else {
                    res.status(200).send({
                        authenticated: false,
                        username: null,
                    });
                }
            });
        }
    });    
});

// Killing the session if the user logs out
router.post('/logout', (req, res) => {
    req.session.auth = false;
    req.session = null;

    res.status(200).send({
        authenticated: false,
        message: "Logged Out",
        username: null,
    });
});

module.exports = router;
