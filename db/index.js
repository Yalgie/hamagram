require('dotenv').config();
const mongoose = require('mongoose');
const chalk = require('chalk');
const sucess = chalk.bold.green;
const error = chalk.bold.red;
const warning = chalk.bold.yellow;
const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const CONN = process.env.DB_CONN_STR;
const ENV = process.env.ENV;

const connect = (cb) => {
    if (ENV === "dev") {
        mongoose.set('debug', true);
    }

    mongoose.connect(CONN, {
        auth: {
            user: USER,
            password: PASS
        }, 
        useNewUrlParser: true
    });

    const db = mongoose.connection;

    db.on("connecting", () => {
        console.log(sucess("DB Connecting"));
    });

    db.on("connected", () => {
        console.log(sucess("DB Connected"));
    });

    db.once("open", () => {
        console.log(sucess("DB Open"));
        if (cb) cb();
    });

    db.on("reconnected", () => {
        console.log(sucess("DB Reconnected"));
    });

    db.on('error', e => {
        console.log(error("DB Error:"));
        console.log(e);
        mongoose.disconnect();
    });

    db.on('disconnected', () => { 
        console.log(sucess("DB Disconnected"));
    });

    // Tries to gracefully close db connection
    process.on('SIGINT', () => {  
        db.close(function () { 
            console.log(warning('DB Terminated')); 
            process.exit(0); 
        }); 
    });
}

module.exports = { 
    connect
};