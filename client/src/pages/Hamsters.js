import React, { Fragment } from "react";
import HamsterList from "../components/HamstersList";

export default function Hamsters() {
    return (
        <Fragment>
            <h1>Hamsters</h1>
            <p>Say 'hello' to your hamster network!</p>
            <HamsterList />
        </Fragment>
    );
};
