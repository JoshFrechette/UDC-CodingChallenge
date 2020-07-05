import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar, CardHeader, IconButton, CardMedia } from '@material-ui/core';


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

const spaceCard = ( data, index ) => {
    // const [modalState, setModalState] = useState(false);
    const { links, rocket, launch_site } = data;
    const imageLink = links.flickr_images[0];
    const site = launch_site.site_name_long[0];
    const { cost_per_launch, description, name } = rocket.rocket;
    console.log(data)
    const ModalContainer = () => {

    }

    return (
        <Card key={name}>
            <CardHeader
                avatar={
                    <Avatar src={imageLink} />      
                }
                title={name}
                // subheader={subtitle}
            />
            {/* <CardMedia style={{ height: "150px" }} image={ imageUrl } /> */}
            <CardContent>
                <Typography variant="body2" component="p">
                    { site }
                   { description }
                </Typography>
                <Typography variant="body2" component="p">
                   { cost_per_launch}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" >More Info</Button>
            </CardActions>
        </Card>

    )
}

export default spaceCard;