import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from "../store/actions";

const SignUp = ({ login }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form onSubmit={(e) => {
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

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => {
            dispatch(login(username, password));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);