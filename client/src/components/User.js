import React from 'react';
import { connect } from 'react-redux';

const User = ({ username }) => {
    return (
        <h1>Hello {username}</h1>
    )
}

// Redux Wizardry
// Mapping state to props and passing dispatch functions through
const mapStateToProps = state => {
    return {
        username: state.username
    }
}

export default connect(mapStateToProps)(User);
