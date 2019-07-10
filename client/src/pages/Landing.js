import React, { Fragment } from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// import ProTip from './ProTip';


export default function App() {
    return (
        <Fragment>
            <Typography variant="h4" component="h1" gutterBottom>
                Create React App v4-beta example
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Built with love by the '}
                <Link color="inherit" href="https://material-ui.com/">
                    Material-UI
                </Link>
                {' team.'}
            </Typography>
        </Fragment>
    );
}