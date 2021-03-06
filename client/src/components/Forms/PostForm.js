import React, { useState } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import markedParse from 'html-react-parser';
import { createPost } from "../../store/actions";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from "../Styles/form";

const PostForm = ({ username, createPost }) => {
    const [title, setTitle] = useState("");
    const [md, setMd] = useState("");
    const [html, setHtml] = useState("");
    const classes = useStyles();

    const parseMD = (md) => {
        // Parses the markdown into html
        const html = marked(md);
        // Instead of using dangerously_set_html
        // This package does some magic
        const parsed = markedParse(html);
        
        setHtml(parsed);
        setMd(md);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={5}>
                <form
                    className={classes.container} 
                    noValidate 
                    autoComplete="off" 
                    onSubmit={(e) => {
                        // Captures input data and passes it through to redux createUser action
                        e.preventDefault();
                        createPost({
                            username,
                            title,
                            content: md,
                            likes: 0
                        });
                    }}
                >
                    <TextField
                        label="Post Title"
                        id="title"
                        className={classes.textField}
                        variant="outlined"
                        value={title} 
                        onChange={e => setTitle(e.target.value)}
                    />

                    <TextField 
                        multiline
                        rowsMax="4"
                        label="Post Content"
                        variant="outlined"
                        className={classes.textField}
                        onChange={e => parseMD(e.target.value)}
                        value={md} 
                    />         

                    <Button 
                        type="submit" 
                        value="submit" 
                        variant="contained" 
                        className={classes.button}
                    >
                        Save & Create
                    </Button>
                </form>
            </Grid>
            <Grid item xs={7}>
                <Paper className={classes.paper}>
                    <span>Preview:</span>
                    <h1>{title}</h1>
                    {html}
                </Paper>
            </Grid>
        </Grid>
    )
};

// Redux Wizardry
const mapStateToProps = state => {
    return {
        username: state.username,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createPost: (username, title, content, likes) => {
            dispatch(createPost(username, title, content, likes));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
