import React, { useState, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar, Grid, Divider, Box, Modal } from '@material-ui/core';
import { flexbox } from '@material-ui/system';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

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
    // paper: {
    //     position: 'absolute',
    //     width: 400,
    //     backgroundColor: theme.palette.background.paper,
    //     border: '2px solid #000',
    //     boxShadow: theme.shadows[5],
    //     padding: theme.spacing(2, 4, 3),
    //   },
});

export default function ShipItem(data, index, props) {
    console.log(props)
    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    const { links, rocket, launch_site } = data;
    const imageLink = links.flickr_images[0];
    const site = launch_site.site_name_long;
    const { cost_per_launch, description, name } = rocket.rocket;

    function abbreviateNumber(cost_per_launch) {
        var newCost = cost_per_launch;
        if (cost_per_launch >= 1000) {
            var suffixes = ["", "k", "m", "b", "t"];
            var suffixNum = Math.floor(("" + cost_per_launch).length / 4);
            var shortValue = '';
            for (var precision = 2; precision >= 1; precision--) {
                shortValue = parseFloat((suffixNum !== 0 ? (cost_per_launch / Math.pow(1000, suffixNum)) : cost_per_launch).toPrecision(precision));
                var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
                if (dotLessShortValue.length <= 2) { break; }
            }
            if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(2);
            newCost = shortValue + suffixes[suffixNum];
        }
        return newCost;
    }

    function rand() {
        return Math.round(Math.random() * 20) - 10;
      }
      
      function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
      }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const ModalContainer = (
        <div  >
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
        </div>
    );

    return (

        <Grid container direction="row" display="flex" alignContent="space-around" alignItems="center" justify="center">
            {/* <Grid container direction="column"> */}
            <Grid item xs={3}>
                {/* <Box display="flex" alignItems="center"> */}
                <Avatar src={imageLink} />
                {/* </Box> */}
            </Grid>
            <Grid item xs={6}>
                <Grid container direction="column">
                    <Grid container direction="row">
                        <Typography variant="h5">{name} | </Typography>
                        <Typography >{abbreviateNumber(cost_per_launch)}</Typography>
                    </Grid>
                    <Grid container direction="row">
                        <Typography variant="p" noWrap minWidth="20">{description}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" color="primary" onClick={handleOpen}>More Info</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby={name + " Rocket modal info"}
                    aria-describedby={name + " Rocket modal description"}
                >
                    {ModalContainer}
                </Modal>
            </Grid>
            {/* </Grid> */}
        </Grid>

    )
}

// export default shipItem;