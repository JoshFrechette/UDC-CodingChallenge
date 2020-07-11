import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';
import { Box, Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 5,
        fontSize: "12px",
        color: "rgba(0, 0, 0, 0.54)"
    }
}
));

let Footer = () => {
    const classes = useStyles();

    return (
        <>
        <Divider />
        <Grid
            className={classes.root}
            container
            direction="row">
<Box flexGrow={1}>
            {/* <Grid item xs={6}> */}
                <Typography className={ classes.root } >Copyright 2020 Devias IO</Typography>
            {/* </Grid> */}
            </Box>
            <Box justifyContent="flex-end">
            {/* <Grid item xs={6}> */}
<Typography className={ classes.root } >Support | Contact</Typography>
            {/* </Grid> */}
            </Box>
        </Grid>
        </>
    )

}

export default Footer;