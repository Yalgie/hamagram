import React from 'react';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import useStyles from "./Styles/post";

export default function Posts({ title, username, content, created}) {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <h1>{title}</h1>
            <div className={classes.content}>
                {content}
            </div>

            <Divider variant="fullWidth" />

            <div className={classes.info}>
                <Badge color="primary" badgeContent={4} className={classes.margin}>
                    <Icon className={classes.icon}>star</Icon>
                </Badge>
                <p>{username} | {created}</p>
            </div>
        </Paper>
    )
};
