import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createUser } from "../store/actions";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SignUp = ({ createUser, msg }) => {
    // Using react useState hooks
    const [error, setError] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const classes = useStyles();

    return (
        <form 
            className={classes.container} 
            noValidate 
            autoComplete="off" 
            onSubmit={(e) => {
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
            }
        }>
            {/* <code>{error}</code>
            <code>{msg}</code> */}
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
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexFlow: 'column',
        marginTop: theme.spacing(1),
    },
    textField: {
        marginBottom: theme.spacing(1),
        maxWidth: '400px',
        width: '100%'
    },
    button: {
        marginTop: theme.spacing(1),
        maxWidth: '400px',
    },
}));

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
