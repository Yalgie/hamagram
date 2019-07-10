import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createUser } from "../../store/actions";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from "../Styles/form";

const RegisterForm = ({ createUser }) => {
    // Using react useState hooks
    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const classes = useStyles();

    return (
        <form 
            className={classes.smallContainer} 
            noValidate 
            autoComplete="off" 
            onSubmit={(e) => {
                // Captures input data and passes it through to redux createUser action
                e.preventDefault();

                if (password === password2 && username.length > 0) {
                    createUser(username, password);
                    setUsername("");
                    setPassword("");
                    setPassword2("");
                    setError("");
                }
                else {
                    setError("Error");
                }
            }
        }>
            {error}
            
            <TextField
                required
                label="Username"
                id="username"
                className={classes.textField}
                autoComplete="username"
                variant="outlined"
                onChange={e => setUsername(e.target.value)} 
            />
            <TextField
                required
                label="Password"
                id="password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={e => setPassword(e.target.value)}
            />
            <TextField
                required
                label="Confirm Password"
                id="password2"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={e => setPassword2(e.target.value)} 
            />
  
            <Button 
                type="submit" 
                value="submit" 
                variant="contained" 
                className={classes.button}
            >
                Sign Up
            </Button>
        </form>
    )
};

// Redux Wizardry
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
    return {
        createUser: (username, password) => {
            dispatch(createUser(username, password));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
