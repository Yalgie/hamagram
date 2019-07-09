import React, { Fragment, Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { logout, login, checkAuth } from "../utils/auth";

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuth: false
        }
    }

    componentDidMount() {
        checkAuth(auth => {
            if (auth !== undefined) {
                this.setState({
                    isAuth: auth
                })
            }
        });
    }

    startLogout() {
        logout(auth => {
            this.setState({
                isAuth: auth
            }, () => {
                this.props.history.push('/');
            });
        })
    }

    startLogin() {
        const username = "hamham";
        const password = "passwords";

        login(auth => {
            if (auth) {
                this.setState({
                    isAuth: auth
                }, () => {
                    this.props.history.push('/dash');
                });
            }
            else {
                console.log("Flash Error?")
            }
            
        }, username, password);
    }

    render() {
        if (this.state.isAuth) {
            return (
                <Fragment>
                    <p>Logged In</p>
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="/dash">Dash</Link></button>
                    <button onClick={() => this.startLogout()}>Log Out</button>
                </Fragment>
            )
        }
        else {
            return (
                <Fragment>
                    <p>Logged Out</p>
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="/dash">Dash</Link></button>
                    <button onClick={() => this.startLogin()}>Log In</button>
                </Fragment>
            )
        }
        
    }
}

export default withRouter(Menu);