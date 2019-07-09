import React, { Fragment } from 'react';
import Post from "./Post";
import { connect } from 'react-redux';
import markedParse from 'html-react-parser';
import marked from 'marked';

const Posts = ({ posts }) => {
    // Looping through all posts in the DB and parsing the markdown
    const postFeed = posts.map(post => {
        const html = marked(JSON.parse(post.content));
        const parsed = markedParse(html);

        // Passing props into the Post component
        return <Post 
            key={post._id}
            id={post._id}
            title={post.title}
            username={post.username}
            content={parsed}
            created={post.createdDate}
        />
    })
    return (
        <Fragment>
            <h1>Posts</h1>
            {postFeed}
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
    }
}

export default connect(mapStateToProps)(Posts);
