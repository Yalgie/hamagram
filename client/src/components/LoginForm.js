import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login, getPosts } from "../store/actions";

const SignUp = ({ login, msg }) => {
    // Using react useState hooks
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form onSubmit={(e) => {
            // Captures input data and passes it through to redux login action
            e.preventDefault();
            login(username, password);
            getPosts();
        }}>
            <code>{msg}</code>
            <input 
                onChange={e => setUsername(e.target.value)}
                type="text" 
                placeholder="Enter Username" 
            />
            <input 
                onChange={e => setPassword(e.target.value)} 
                type="password" 
                placeholder="Enter Password"
            />
            <button type="submit" value="submit">Log In</button>
        </form>
    )
}

// Redux Wizardry
// Mapping state to props and passing dispatch functions through
const mapStateToProps = state => {
    return {
        msg: state.msg
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => {
            dispatch(login(username, password));
        },
        getPosts: () => {
            dispatch(getPosts());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
