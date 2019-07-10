import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login, getPosts } from "../../store/actions";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from "../Styles/form";

const SignUp = ({ login }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();

    return (
        <form 
            className={classes.smallContainer} 
            noValidate 
            autoComplete="off" 
            onSubmit={(e) => {
                e.preventDefault();
                login(username, password);
                getPosts();
            }
        }>
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

            <Button 
                type="submit" 
                value="submit" 
                variant="contained" 
                className={classes.button}
            >
                Login
            </Button>
        </form>
    )
};

// Redux Wizardry
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => {
            dispatch(login(username, password));
        },
        getPosts: () => {
            dispatch(getPosts());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
