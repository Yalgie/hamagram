import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';

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
}

// MaterialUI Styles
const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        minHeight: "150px"
    },
    margin: {
        margin: theme.spacing(1),
        marginRight: theme.spacing(2),
    },
    icon: {
        color: "#333"
    },
    info: {
        display: "flex",
        marginTop: theme.spacing(2),
    },
    content: {
        marginBottom: theme.spacing(2),
    }
}));
