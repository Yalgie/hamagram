import React from 'react';
import Paper from '@material-ui/core/Paper';
import useStyles from "./Styles/hamster";

export default function Hamster({ username, created }) {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <span>Hamster Name:</span>
            <h1>{username}</h1>
        </Paper>
    )
};
