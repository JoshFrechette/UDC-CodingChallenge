import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar, CardHeader, IconButton, CardMedia, Grid, Divider, Box } from '@material-ui/core';
import { flexbox } from '@material-ui/system';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

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

    function abbreviateNumber(cost_per_launch) {
        var newCost = cost_per_launch;
        if (cost_per_launch >= 1000) {
            var suffixes = ["", "k", "m", "b","t"];
            var suffixNum = Math.floor( (""+cost_per_launch).length/4 );
            var shortValue = '';
            for (var precision = 2; precision >= 1; precision--) {
                shortValue = parseFloat( (suffixNum != 0 ? (cost_per_launch / Math.pow(1000,suffixNum) ) : cost_per_launch).toPrecision(precision));
                var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
                if (dotLessShortValue.length <= 2) { break; }
            }
            if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(2);
            newCost = shortValue+suffixes[suffixNum];
        }
        return newCost;
    }

    const ModalContainer = () => {

    }

    return (

        <Grid container direction="row" alignContent="space-around">
            {/* <Grid container direction="column"> */}
                <Grid item xs={3}>
                    {/* <Box justifyContent="center"> */}
                        <Avatar src={imageLink} />
                    {/* </Box> */}
                </Grid>
                <Grid item xs={6}>
                    <Grid container direction="column">
                        <Grid container direction="row">
                            <Typography variant="h5">{name} | </Typography>
                            {/* <Divider orientation="vertical" /> */}
                            <Typography >{abbreviateNumber(cost_per_launch)}</Typography>
                        </Grid>
                        <Grid container direction="row">
                            <Typography variant="p">{description}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" >More Info</Button>
                </Grid>
            {/* </Grid> */}
        </Grid>

        // <List>
        //     <ListItem alignItems="flex-start">
        //         <ListItemAvatar>
        //             <Avatar src={imageLink} />
        //         </ListItemAvatar>
        //     </ListItem>
        //     <ListItem>
        //         <ListItemText>
        //             <Typography>
        //                 {name} | {cost_per_launch}
        //             </Typography>
        //         </ListItemText>
        //     </ListItem>
        //     <ListItem>
        //         <ListItemText>
        //             <Typography>
        //                 {description}
        //             </Typography>
        //         </ListItemText>
        //     </ListItem>
        //     <Button variant="contained" color="primary" >More Info</Button>
        // </List>

    )
}

export default shipItem;