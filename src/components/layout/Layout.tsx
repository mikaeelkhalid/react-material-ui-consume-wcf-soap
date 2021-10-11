import { makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import { useHistory, useLocation } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { AddCircleOutlineOutlined } from '@material-ui/icons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { format } from 'date-fns';
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
    },
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: '#f4f4f4',
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    date: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const Layout = (props: any): any => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: 'Dashboard',
      icon: <DashboardIcon color='primary' />,
      path: '/',
    },
    {
      text: 'Create',
      icon: <AddCircleOutlineOutlined color='primary' />,
      path: '/create',
    },
    {
      text: 'Customers',
      icon: <ListIcon color='primary' />,
      path: '/customers',
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar
        position='fixed'
        className={classes.appBar}
        elevation={0}
        color='primary'
      >
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>Admin</Typography>
          <Avatar className={classes.avatar}>A</Avatar>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{ paper: classes.drawerPaper }}
        anchor='left'
      >
        <div>
          <Typography variant='h5' className={classes.title}>
            Car<small style={{ color: 'primary' }}>e</small>s
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? classes.active : ''}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
