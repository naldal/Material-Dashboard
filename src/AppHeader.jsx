import { AppBar, Badge, CssBaseline, fade, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import clsx from "clsx";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Drawer from './Drawer'
import { AccountCircle } from '@material-ui/icons';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';

let drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down('sm')]:{
      width: '100%'
    },
    
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },

   search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
    inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,

  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  // content: {
  //   flexGrow: 1,
  //   padding: theme.spacing(3),
  //   transition: theme.transitions.create("margin", {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen
  //   }),
  //   marginLeft: -drawerWidth
  // },
  // contentShift: {
  //   transition: theme.transitions.create("margin", {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen
  //   }),
  //   marginLeft: 0
  // }
}));


const AppHeader = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
      // drawerWidth= 260;
      setOpen(true);
    };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="secondary"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Drawer mobileOpen={open} /> 
    </div>
  );
}

export default AppHeader;