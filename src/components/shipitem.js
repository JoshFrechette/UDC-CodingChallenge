import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar, CardHeader, IconButton, CardMedia, Grid, Divider } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const shipItem = ( data, index ) => {
    // const [modalState, setModalState] = useState(false);
    const { links, rocket, launch_site } = data;
    const imageLink = links.flickr_images[0];
    const site = launch_site.site_name_long;
    const { cost_per_launch, description, name } = rocket.rocket;

    const ModalContainer = () => {

    }

    return (

        <Grid container direction="row">
            <Avatar src={imageLink} /> 
            <Typography variant="h5">{name}</Typography>
            <Divider orientation="vertical"/>
            <Typography variant="p">{ cost_per_launch}</Typography>
            <Typography variant="p">{description}</Typography>
            <Button variant="contained" color="primary" >More Info</Button>
        </Grid>

    )
}

export default shipItem;