import React from 'react';
import Grid from '@material-ui/core/Grid';
import SpaceCard from '../components/spacecard';

const Content = () => {

    const getspaceMakeCard = (spaceMakerObj) => {
        return (
            <Grid item xs={12} sm={4}>
                <SpaceCard {...spaceMakerObj} />
            </Grid>
        )
    }

    // return (
    //     <Grid container spacing={2}>
    //         {spaceMakerList.map(spaceMakerObj => getspaceMakeCard(spaceMakerObj))}
    //     </Grid>
    // )
}

export default Content;