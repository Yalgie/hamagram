import React, { Fragment, useState } from 'react';
import marked from 'marked';
import { withRouter } from 'react-router-dom';
import markedParse from 'html-react-parser';
import axios from 'axios';
import { connect } from 'react-redux';
import { getPosts } from "../store/actions";

const NewPost = ({ username, history, getPosts }) => {
    const [title, setTitle] = useState("");
    const [md, setMd] = useState("");
    const [html, setHtml] = useState("");

    const parseMD = (md) => {
        // Parses the markdown into html
        const html = marked(md);
        // Instead of setting dangerously set html
        // This does some magic
        const parsed = markedParse(html);
        
        setHtml(parsed);
        setMd(md);
    }

    const createPost = async () => {
        // Send new post to DB via API
        await axios.post(`/api/v1/feed`, {
            username,
            title,
            content: md
        });

        // Once post is saved - getting all posts
        // and redirects to the feed page
        getPosts();
        history.push("/feed");
    }

    return (
        <Fragment>
            <input value={title} onChange={e => setTitle(e.target.value)}  />
            <textarea value={md} onChange={e => parseMD(e.target.value)}/>

            <h1>{title}</h1>
            <div>{html}</div>

            <button onClick={() => createPost()}>Create Post</button>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        username: state.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => {
            dispatch(getPosts());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewPost));
