import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    signIn = () => {
        axios.post(`/api/v1/auth/login`, {
            username: "hamham",
            password: "password"
        }).then(res => {
            console.log(res)
        }).catch(e => {
            console.log(e);
        });
    }

    render() {
        return <div>
            <button onClick={() => this.signIn()}>Sign In</button>
        </div>
    }
}

export default SignUp;