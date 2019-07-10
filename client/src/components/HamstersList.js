import React from 'react';
import Hamster from './Hamster';
import { connect } from 'react-redux';

const HamstersList = ({ hamsters = [] }) => {
    const hamstersList = hamsters.map(hamster => {
        return <Hamster
            key={hamster._id}
            id={hamster._id}
            username={hamster.username}
            created={hamster.createdDate}
        />
    })

    return hamstersList;
}

// Redux Wizardy
const mapStateToProps = state => {
    return {
        hamsters: state.hamsters,
    }
}

export default connect(mapStateToProps)(HamstersList);
