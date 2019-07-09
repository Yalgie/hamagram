import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    createUser = () => {
        axios.post(`/api/v1/hamster`, {
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
            <button onClick={() => this.createUser()}>Create User</button>
        </div>
    }
}

export default SignUp;