import React, { Fragment } from 'react';
import Hamster from './Hamster';
import { connect } from 'react-redux';

const HamsterList = ({ hamsters = [] }) => {
    const hamstersList = hamsters.map(hamster => {
        return <Hamster
            key={hamster._id}
            id={hamster._id}
            username={hamster.username}
            created={hamster.createdDate}
        />
    })

    return (
        <Fragment>
            <h1>Hamsters</h1>
            {hamstersList}
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        hamsters: state.hamsters,
    }
}

export default connect(mapStateToProps)(HamsterList);
