import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import theme from './theme.js';
import RocketIcon from '../assets/rocket.png';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import RocketQuery from './query';
import Content from '../components/content';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
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
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          <Divider />
        </Toolbar>
        <Tabs aria-label="simple tabs example">
          <Tab label="Rockets" />
          <Tab label="Satellites" />
        </Tabs>
      </AppBar>
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
            <ListItemText>Welcome, Ryan</ListItemText>
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

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container direction="column">

          <Grid item sm={2} />

          <Grid item xs={12} sm={8}>
            <Typography paragraph>Active Rockets</Typography>

            <Grid item>
              <RocketQuery />
            </Grid>
          </Grid>

          <Typography paragraph>Copyright 2020 Devias IO</Typography>
          <Grid item sm={2} />
        </Grid>

      </main>
    </div>
  );
}