import React, { Fragment } from "react";
import HamsterList from "../components/HamsterList";
import Typography from '@material-ui/core/Typography';

export default function Hamsters() {
    return (
        <Fragment>
            <Typography variant="h4" component="h1">
                Hamsters
            </Typography>
            <HamsterList />
        </Fragment>
    );
};