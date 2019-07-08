require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');
const chalk = require('chalk');

const { connect } = require('./db');

const info = chalk.bold.cyan;
const app = express();
const PORT = process.env.PORT || 3001;
const ENV = process.env.ENV;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

if (ENV === "dev") {
    app.use(logger('dev'));
}
else if (ENV === "production") {
    // Serving build files if in production
    // Uses reacts local hot reload server locally
    app.use(express.static(path.join(
        __dirname, 
        'client', 
        'build'
    )));

    app.get('*', (req, res) => {
        res.sendFile(path.join(
            __dirname, 
            'client', 
            'build', 
            'index.html'
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
