require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');
const chalk = require('chalk');
const cookieSession = require('cookie-session');
const { connect } = require('./db');
const hamster = require('./api/v1/hamster');
const auth = require('./api/v1/auth');
const post = require('./api/v1/post');

const info = chalk.bold.cyan;
const PORT = process.env.PORT || 3001;
const ENV = process.env.ENV;
const SECRET = process.env.SECRET;
const app = express();

app.use(cookieSession({
    name: 'hamagramSession',
    secret: SECRET,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Allows req.body
app.use(cors()); // Enabling CORS for requests
app.use(helmet()); // Built in security wrapper

// Setting API routes
app.use('/api/v1/hamster', hamster);
app.use('/api/v1/auth', auth);
app.use('/api/v1/post', post);

if (ENV === "dev") {
    app.use(logger('dev'));
}
else if (ENV === "production") {
    /* 
        Serving build files if app is in production, if in
        dev we use the npm run dev script which concurrently
        starts this script with nodemon and runs the react
        dev server 
    */
   
    app.use(express.static(path.join(
        __dirname, 
        'client', 
        'build',
    )));

    app.get('*', (req, res) => {
        res.sendFile(path.join(
            __dirname, 
            'client', 
            'build', 
            'index.html',
        ));
    });
}

// Connecting to Monogo before starting the app
connect(() => {
    app.listen(PORT, e => {
        if (e) throw e;
        console.log(info(`Hammin on ${PORT}`));
    });
});
