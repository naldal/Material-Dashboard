import React from 'react';

import {Switch, Route, HashRouter} from 'react-router-dom';
import Default from "./Default";
import Test from "./Test";
import {makeStyles} from "@material-ui/core/styles";
import {Divider, Grid, IconButton} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FilterListIcon from '@material-ui/icons/FilterList';
import SyncIcon from '@material-ui/icons/Sync';
import Button from "@material-ui/core/Button";

const drawerWidth = 260
const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        overflow: "auto",
        position: 'absolute',
        top: '73px',
        left: '260px',
        width: `calc(100% - ${drawerWidth}px)`,
        height: '100vh',
        background: '#f9f9fc',
        padding: '40px',
        [theme.breakpoints.down('sm')]:{
            left: "0px",
            width: "100%"
        },
    },
    divideStyle: {
        marginTop: "15px"
    }
}))

function Components() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Grid container justify="space-between" alignItems="center">
                <Grid>
                    <Typography display="inline" variant="h5">Welcome back, Lucy&nbsp;&nbsp;</Typography>
                    <Typography display="inline" variant="overline">Monday 29 April 2020</Typography>
                </Grid>

                <Grid>
                    <IconButton size="small">
                        <SyncIcon />
                    </IconButton>
                    <IconButton size="small">
                        <FilterListIcon />
                    </IconButton>
                    <Button size="small" variant="contained" color="secondary" disableElevation={true} style={{marginLeft:"13px"}}>
                        <Typography variant="button">
                            Today: April 11
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
            <Divider className={classes.divideStyle} />

            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Default} />
                    <Route exact path="/test" component={Test} />
                </Switch>
            </HashRouter>

        </div>

    )
}

export default Components;