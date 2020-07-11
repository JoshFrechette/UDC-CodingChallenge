import React, { useState, Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar, Grid, Divider, Box, Modal, CardMedia } from '@material-ui/core';
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

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        paddingTop: 0,
    },
    dialog: {
        padding: "0px",
        paddingTop: "0px!important",
    },
    dialogbody: {
        padding: "10px",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    moreButton: {
        "&:hover": {
            color: "primary",
            elevation: 11,
        }
    },
    closeButton: {
        position: 'absolute',
        right: 1,
        top: 1,
        color: theme.palette.grey[500],
    },
    dialogUnit: {
        fontSize: "10px",
        color: "grey"
    },
    media: {
        width: "100%",
        margin: null,
    }
}));

const DialogTitle = withStyles(useStyles)((props) => {
    const { children, onClose, ...other } = props;
    const classes = useStyles();

    return (
        <MuiDialogTitle disableTypography className={classes.dialog} {...other}>
             <Typography variant="h6">{children }
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <Typography>Close</Typography><CloseIcon />
                </IconButton>
            ) : null}
            </Typography>
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(0),
    },
}))(MuiDialogContent);

export default function ShipItem(data, index, props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { links, rocket, launch_site } = data;
    const imageLink = links.flickr_images[0];
    // const site = launch_site.site_name_long;
    const { cost_per_launch, description, name, country, diameter, height } = rocket.rocket;

    function numberWithCommas(cost_per_launch) {
        return cost_per_launch.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

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
            <Grid item xs={2}>
                <Avatar src={imageLink} />
            </Grid>
            <Grid item xs={6}>
                <Grid container direction="column">
                    <Grid container direction="row">
                        <Typography variant="h5">{name} | </Typography>
                        <Typography>{abbreviateNumber(cost_per_launch)}</Typography>
                    </Grid>
                    <Grid container direction="row">
                        <Typography
                            variant="p"
                            noWrap
                            minWidth="20px"
                        >
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Button
                    className={ classes.moreButton }
                    variant="contained"
                    disableElevation
                    // color="primary"
                    onClick={handleClickOpen}
                    // onFocusVisible={
                    //     color="primary"
                    // }
                >More Info</Button>

                <Dialog
                    
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <DialogContent
                        dividers
                        className={ classes.dialog }
                    >
                        <Grid container direction="row">
                            <Grid 
                                item xs={4}>
                                <img
                                    className={classes.media}
                                    src={imageLink}
                                    title={"image of " + name}
                                />
                            </Grid>
                            <Grid 
                                item xs={8} 
                                className={classes.dialogbody}
                            >
                                <Grid 
                                    container 
                                    direction="column" 
                                >
                                    <Grid 
                                        item 
                                        xs={12}
                                        className={classes.dialogbody}
                                    >
                                        <DialogTitle
                                            id="customized-dialog-title"
                                            onClose={handleClose}>
                                        </DialogTitle>
                                    </Grid>
                                    <Grid 
                                        item 
                                        xs={12}
                                        className={classes.dialogbody}
                                    >
                                        <Typography variant="h5">{ name }</Typography>
                                        <Typography paragraph>{ country }</Typography>
                                        
                                         <Box mx="auto" p={1}>
                                        <Grid 
                                            container 
                                            direction="row"
                                            alignItems="center"
                                        >

                                                    <Grid item xs={3} align="center">
                                                        <Typography className={ classes.dialogUnit }>COST/LAUNCH</Typography>
                                                        <Typography paragraph>{ "$" + numberWithCommas(cost_per_launch) }</Typography>
                                                    </Grid>

                                                    <Divider light color="primary" variant="middle" orientation="vertical" flexItem />

                                                    <Grid item xs={3} align="center">
                                                        <Typography className={ classes.dialogUnit }>HEIGHT</Typography>
                                                        <Typography paragraph>{ height.meters + "M" }</Typography>
                                                    </Grid>

                                                    <Divider color="primary" variant="middle" orientation="vertical" flexItem />

                                                    <Grid item xs={3} align="center">
                                                        <Typography className={ classes.dialogUnit }>DIAMETER</Typography>
                                                        <Typography paragraph>{ diameter.meters + " M"}</Typography>
                                                    </Grid>
                                              

                                        </Grid>
                                        </Box>
                                        <Grid item paddingTop={10}>
                                            <Typography paragraph>{ description }</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </Grid>
        </Grid>

    )
}