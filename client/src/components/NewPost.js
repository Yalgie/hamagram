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
        const html = marked(md);
        const parsed = markedParse(html);

        setHtml(parsed);
        setMd(md);
    }

    const createPost = async () => {
        await axios.post(`/api/v1/post`, {
            username,
            title,
            content: md
        });

        getPosts();
        history.push("/posts");
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
