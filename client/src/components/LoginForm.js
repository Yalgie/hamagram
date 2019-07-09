import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from "../store/actions";

const SignUp = ({ login }) => {
    // Using react useState hooks
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form onSubmit={(e) => {
            // Captures input data and passes it through to redux login action
            e.preventDefault();
            login(username, password);
            setUsername("");
            setPassword("");
        }}>
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
// Still need to initialize this even if it's empty due to redux params
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => {
            dispatch(login(username, password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
