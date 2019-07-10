import React from 'react';
import Hamster from './Hamster';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

const HamstersList = ({ hamsters = [] }) => {
    const hamstersList = hamsters.map(hamster => {
        return  <Grid item xs={6}>
            <Hamster
                key={hamster._id}
                id={hamster._id}
                username={hamster.username}
                created={hamster.createdDate}
            />
        </Grid>
    })
            
    return <Grid container spacing={2}>{hamstersList}</Grid>;
};

// Redux Wizardy
const mapStateToProps = state => {
    return {
        hamsters: state.hamsters,
    }
};

export default connect(mapStateToProps)(HamstersList);
