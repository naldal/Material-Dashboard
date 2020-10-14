import React from 'react';
import {Drawer as MUIDrawer,Chip,List,ListItem,ListItemIcon,ListItemText,Collapse, ListSubheader, Typography, Avatar, Badge } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles' 
import PersonIcon from '@material-ui/icons/Person';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import WorkIcon from '@material-ui/icons/Work';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import WbIncandescentSharpIcon from '@material-ui/icons/WbIncandescentSharp';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ReceiptIcon from '@material-ui/icons/Receipt';
import FlareIcon from '@material-ui/icons/Flare';

const drawerWidth = 260;

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexDirection: "column",
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#1c2530",
        color: "#eee",
        borderRight: "0"
    },
    listItems: {
        fontSize: "0.8rem",
    },
    listIcons: {
        color: "#999",
        fontSize: "1.3rem"
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    listItemText: {
        fontSize: "0.91rem",
        marginLeft: "-17px"
    },
    perList:{
        padding: "0.6rem",
        margin: "0",
    },
    childLists: {
  
    },
    logo: {
        height: "64px",
        backgroundColor:"#232f3e;",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    footer: {
        position:"absolute",
        bottom: "0",
        left: "0",
        backgroundColor:"#232f3e;",
        width: "100%",
    },
    bottomflex: {
        height:"64px",
        display: "flex",
        flex: "0 0 46%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    badgeposition: {
        position:"absolute",
        left:"6%",
        top: "10px"
    },
    flextypo: {
        marginLeft: "-11px",
        marginTop: "6px",
    }
}))



const Drawer = () => {

    const classes = useStyles();

    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

    const handleClick1 = () => {
        setOpen1(!open1);
        setOpen2(false)
        setOpen3(false)
    };

    const handleClick2 = () => {
        setOpen2(!open2);
        setOpen1(false)
        setOpen3(false)
    };
    
    const handleClick3 = () => {
        setOpen3(!open3);
        setOpen1(false);
        setOpen2(false);
    };
    
    return (
        <MUIDrawer variant="permanent" className={classes.drawer} classes={{paper:classes.drawerPaper}}>
            <div id="header" className={classes.logo}>
                <FlareIcon style={{color:"#2196f3"}}/>
                <Typography variant="h6">&nbsp;Material App&nbsp;&nbsp;</Typography>
                <Chip label="Pro" color="secondary" size="small"/>
            </div>
            <List className={classes.perList} 
            subheader={
                <ListSubheader component="div" id="nested-list-subheader" style={{color:"#eee", fontSize:"0.9rem"}}>
                Pages
                </ListSubheader>
            }>
                <ListItem button onClick={handleClick1}>
                <ListItemIcon >
                    <AccountTreeIcon className={classes.listIcons}/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" classes={{primary:classes.listItemText}}/>
                {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open1} timeout="auto">
                <div className={classes.childLists}>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText inset={true} primary="Default" classes={{primary:classes.listItemText}} />
                        </ListItem>
                    </List>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText inset={true} primary="Analytics" classes={{primary:classes.listItemText}} />
                        </ListItem>
                    </List>
                </div>
            </Collapse>
            </List>

            <List className={classes.perList}>
                <ListItem button onClick={handleClick2}>
                <ListItemIcon>
                    <ViewQuiltIcon className={classes.listIcons}/>
                </ListItemIcon>
                <ListItemText primary="Pages" classes={{primary:classes.listItemText}} />
                {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open2} timeout="auto">
                <div className={classes.childLists}>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText inset={true} primary="Settings" classes={{primary:classes.listItemText}} />
                    </ListItem>
                </List>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText inset={true} primary="Pricing" classes={{primary:classes.listItemText}} />
                    </ListItem>
                </List>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText inset={true} primary="Blank Page" classes={{primary:classes.listItemText}} />
                    </ListItem>
                </List>
                </div>
            </Collapse>
            </List>

            <List className={classes.perList}>
                <ListItem button>
                <ListItemIcon>
                    <PersonIcon className={classes.listIcons}/>
                </ListItemIcon>
                <ListItemText primary="Profile" classes={{primary:classes.listItemText}} />
                
                </ListItem>
            </List>

            <List className={classes.perList}>
                <ListItem button>
                <ListItemIcon>
                    <WorkIcon className={classes.listIcons}/>
                </ListItemIcon>
                <ListItemText primary="Projects" classes={{primary:classes.listItemText}} />
                
                </ListItem>
            </List>

            <List className={classes.perList}>
                <ListItem button onClick={handleClick3}>
                <ListItemIcon>
                    <ReceiptIcon className={classes.listIcons}/>
                </ListItemIcon>
                <ListItemText primary="Invoices" classes={{primary:classes.listItemText}} />
                {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open3} timeout="auto">
                <div className={classes.childLists}>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText inset={true} primary="List" classes={{primary:classes.listItemText}} />
                    </ListItem>
                </List>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText inset={true} primary="Details" classes={{primary:classes.listItemText}}/>
                    </ListItem>
                </List>
                </div>
            </Collapse>
            </List>

            <List className={classes.perList}>
                <ListItem button>
                <ListItemIcon style={{color:"#eee"}}>
                    <VerifiedUserIcon className={classes.listIcons}/>
                </ListItemIcon>
                <ListItemText primary="Tasks" classes={{primary:classes.listItemText}} />
                </ListItem>
            </List>
            <div className={classes.footer}>
                <div id="footer" className={classes.bottomflex}>
                    <StyledBadge
                        overlap="circle"
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                        }}
                        variant="dot"
                        classes={{root:classes.badgeposition}}
                    >
                        <Avatar alt="Remy Sharp" src="https://material-app.bootlab.io/static/img/avatars/avatar-1.jpg" style={{margin:"2px"}} />
                    </StyledBadge>
                    <div className={classes.flextypo}>
                        <Typography variant="body2">&nbsp;Lucy Lavender&nbsp;&nbsp;</Typography>
                        <Typography variant="overline" style={{fontSize:"0.4rem"}}>&nbsp;UX Designer&nbsp;&nbsp;</Typography>
                    </div>
                </div>
            </div>
        </MUIDrawer>
        
    );
};

export default Drawer;