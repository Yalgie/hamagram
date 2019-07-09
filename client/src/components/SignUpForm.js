import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createUser } from "../store/actions";

const SignUp = ({ createUser, msg }) => {
    // Using react useState hooks
    const [error, setError] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    return (
        <form onSubmit={(e) => {
            // Captures input data and passes it through to redux createUser action
            e.preventDefault();

            if (password === password2) {
                createUser(username, password);
                setUsername("");
                setPassword("");
                setPassword2("");
            }
            else {
                setError("Password don't match")
            }
        }}>
            <code>{error}</code>
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
            <input 
                onChange={e => setPassword2(e.target.value)} 
                type="password" 
                placeholder="Enter Password"
            />
            <button type="submit" value="submit">SignUp</button>
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
        createUser: (username, password) => {
            dispatch(createUser(username, password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
