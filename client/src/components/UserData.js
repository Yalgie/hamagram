import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const UserData = ({ username }) => {
    return (
        <Fragment>
            <h1>Hello, {username}.</h1>
            <p>Create a new post, explore and like other hamsters' posts or check out the other hamsters on the network!</p>
        </Fragment>
    )
}

// Redux Wizardry
const mapStateToProps = state => {
    return {
        username: state.username
    }
}

export default connect(mapStateToProps)(UserData);
