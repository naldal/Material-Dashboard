import {
    AppBar,
    Badge,
    CssBaseline,
    fade,
    IconButton,
    makeStyles,
    Menu,
    MenuItem,
    Toolbar
} from '@material-ui/core';

import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Drawer from './Drawer'
import MoreIcon from '@material-ui/icons/More';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

let drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },

    root: {
        display: "flex",
    },

    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        backgroundColor: "#ffffff",
        [theme.breakpoints.down('sm')]: {
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
        color: "#000000",
        backgroundColor: fade(theme.palette.common.white, 0.25),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.1),
        },
        // marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            // marginLeft: theme.spacing(3),
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


    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up('md')]: {
            display: "flex",
            position: "absolute",
            right: "3%"
        }
    },

    sectionMobile: {
        display: "flex",
        position:"absolute",
        right:"3%",
        [theme.breakpoints.up('md')]: {
            display: "none"
        }
    },

    sectionMenuMobile: {
        display: "absolute",
        left: "0",
        [theme.breakpoints.up('md')]: {
            display: "none"
        }
    },

}));


const AppHeader = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // const handleDrawerOpen = () => {
    //     setOpen(true)
    // }

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const menuId = 'primary-search-account-menu';

    const isMenuOpen = Boolean(anchorEl)

    const handleMenuClose = (event) => {
        setAnchorEl(null);
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="#eeeeee">
                    <Badge badgeContent={4} color="secondary">
                        <ChatBubbleOutlineIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="#eeeeee">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="#eeeeee"
                >
                    <PowerSettingsNewIcon />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );


    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                elevation={0}
                position="fixed"
                className={classes.appBar}
            >
                <Toolbar>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            autoFocus={true}
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}

                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>

                    <div className={classes.sectionDesktop}>
                        <div className={classes.grow}/>
                        <IconButton aria-label="show 4 new mails" color="#eeeeee">
                            <Badge badgeContent={4} color="secondary">
                                <ChatBubbleOutlineIcon/>
                            </Badge>
                        </IconButton>

                        <IconButton aria-label="show 17 new notifications" color="#eeeeee">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>

                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="#eeeeee"
                        >
                            <PowerSettingsNewIcon/>
                        </IconButton>
                    </div>

                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="#eeeeee"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>

                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}

            <Drawer mobileOpen={open}/>
        </div>
    );
}

export default AppHeader;