import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from "../store/actions";

class SignUp extends Component {
    render() {
        return <div>
            <button onClick={() => this.props.login(
                "hamham",
                "password"
            )}>Sign In</button>
        </div>
    }
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