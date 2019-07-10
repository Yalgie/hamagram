import React from 'react';
import Post from "./Post";
import { connect } from 'react-redux';
import markedParse from 'html-react-parser';
import marked from 'marked';

const PostsList = ({ posts = [] }) => {
    // Looping through all posts in the DB and parsing the markdown
    const postsList = posts.map(post => {
        const html = marked(JSON.parse(post.content));
        const parsed = markedParse(html);

        // Passing relevant props into the Post component
        return <Post 
            key={post._id}
            id={post._id}
            title={post.title}
            username={post.username}
            content={parsed}
            created={post.createdDate}
        />
    })
    
    return postsList;
};

// Redux Wizardry
const mapStateToProps = state => {
    return {
        posts: state.posts,
    }
};

export default connect(mapStateToProps)(PostsList);
