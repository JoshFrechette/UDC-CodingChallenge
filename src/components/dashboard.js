import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import theme from './theme.js';
import Rocket from '../assets/rocket.png';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import CreditCardIcon from '@material-ui/icons/CreditCard';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Avatar, CardHeader, IconButton, CardMedia } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import RocketQuery from './query';
import { BottomNavigation } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  paper : {
    margin: theme.spacing(3),
    padding: 10,
    width: theme.spacing(10),
    // height: theme.spacing(16),
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (

    <div className={classes.root}>

      <CssBaseline />
      {/* Top Nav */}
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar>
          <ListItem>
            <Typography variant="h6" noWrap>
              Dashboard
          </Typography>
          </ListItem>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon children={
        <input />
      }/>
          </IconButton>
        </Toolbar>
        <Divider variant="middle" />
        <ListItem>
          <Tabs onChange={handleChange} value={value} aria-label="simple tabs example">
            <Tab 
            label="Rockets" 
            value="rockets"             
            wrapped
            {...a11yProps('one')}/>
            <Tab label="Satellites" value="satellites" />
          </Tabs>
        </ListItem>
      </AppBar>

      {/* Side Nav */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar}>
          <ListItem >
            {/* <ListItemIcon><RocketIcon/></ListItemIcon> */}
            <ListItemText><img src={Rocket} alt="rocket" />Welcome, Ryan</ListItemText>
          </ListItem>
        </div>
        <Divider />
        <List>

          <ListItem >
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon><SupervisorAccountIcon /></ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon><CreditCardIcon /></ListItemIcon>
            <ListItemText>Subscription</ListItemText>
          </ListItem>

        </List>

      </Drawer>
      {/* <TabPanel value={value} index="one"> */}
      {/* Main content */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="h4">Active Rockets</Typography>

        <Grid container>
          <Grid item> 
          <Typography variant="h4">Active Rockets</Typography>
          </Grid>
          <Paper>

          <Grid container direction="column">

            <RocketQuery />

          </Grid>

          </Paper>
        </Grid>

        <Grid container direction="row">
        {/* <BottomNavigation> */}
        <Grid item  xs={6}>
          <Typography>Copyright 2020 Devias IO</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>Support | Contact</Typography>
          </Grid>
        {/* </BottomNavigation> */}
        </Grid>
      </main>
      {/* </TabPanel> */}
  




    </div>
  );
}