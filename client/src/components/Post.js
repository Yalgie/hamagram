import React from 'react';
import { connect } from 'react-redux';
import { like } from "../store/actions";
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import useStyles from "./Styles/post";

const Post = ({ data, content, like }) => {
    const classes = useStyles();

    const handleLike = () => {
        like({
            ...data,
            likes: data.likes += 1,
        });
    }

    return (
        <Paper className={classes.paper}>
            <h1>{data.title}</h1>
            <div className={classes.content}>
                {content}
            </div>

            <Divider variant="fullWidth" />

            <div className={classes.info}>
                <Badge 
                    color="primary" 
                    badgeContent={data.likes} 
                    className={classes.margin}
                    onClick={() => handleLike()}
                >
                    <Icon className={classes.icon}>star</Icon>
                </Badge>
                <p>{data.username} | {data.createdDate}</p>
            </div>
        </Paper>
    )
};

// Redux Wizardry
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
    return {
        like: id => {
            dispatch(like(id));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
