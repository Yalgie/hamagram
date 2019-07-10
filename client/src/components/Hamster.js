import React from 'react';
import Paper from '@material-ui/core/Paper';
import useStyles from "./Styles/hamster";

export default function Hamster({ username, created }) {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <p>{username}</p>
            <p>{created}</p>
        </Paper>
    )
};
