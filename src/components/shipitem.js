import React, { useState, Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar, Grid, Divider, Box, Modal } from '@material-ui/core';
import { flexbox } from '@material-ui/system';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//     const top = 50 + rand();
//     const left = 50 + rand();

//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    dialog: {
        margin: 0,
        padding: theme.spacing(2),
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    // paper: {
    //     position: 'absolute',
    //     width: 400,
    //     backgroundColor: theme.palette.background.paper,
    //     border: '2px solid #000',
    //     boxShadow: theme.shadows[5],
    //     padding: theme.spacing(2, 4, 3),
    //   },
}));

const DialogTitle = withStyles(useStyles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.dialog} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

export default function ShipItem(data, index, props) {
    console.log(props)
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    // const [modalStyle] = useState(getModalStyle);
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

    // function rand() {
    //     return Math.round(Math.random() * 20) - 10;
    // }

    // function getModalStyle() {
    //     const top = 50 + rand();
    //     const left = 50 + rand();

    //     return {
    //         top: `${top}%`,
    //         left: `${left}%`,
    //         transform: `translate(-${top}%, -${left}%)`,
    //     };
    // }

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // const ModalContainer = (
    //     <div>
    //         <h2 id="simple-modal-title">Text in a modal</h2>
    //         <p id="simple-modal-description">
    //             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    //     </p>
    //     </div>
    // );

    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

    return (

        <Grid container 
            direction="row" 
            display="flex" 
            alignContent="space-around" 
            alignItems="center" 
            justify="center">
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
                <Button variant="contained" color="primary" onClick={handleClickOpen}>More Info</Button>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Modal title
                    </DialogTitle>
                        <DialogContent dividers>
                            <Typography gutterBottom>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            </Typography>
                            <Typography gutterBottom>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </Typography>
                            <Typography gutterBottom>
                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                auctor fringilla.
                            </Typography>
                        </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Save changes
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
            {/* </Grid> */}
        </Grid>

    )
}