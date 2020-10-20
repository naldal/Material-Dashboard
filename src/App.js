import { makeStyles, CssBaseline, createMuiTheme} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppHeader from './AppHeader';
import Default from './Default';
import Drawer from './Drawer.jsx';
import Paper from "@material-ui/core/Paper";
import RouterTest from "./RouterTest";

const useStyle = makeStyles({
    container: {
        display: "flex"
    },
})

function App() {
    const classes = useStyle();
  

    return (
        <div className={classes.container}>
            <AppHeader />
            <Switch>
                <Paper>
                    <Route exact path="/" render={(props) => <Default {...props}/>}></Route>
                    <Route exact path="/test" render={(props) => <RouterTest {...props}/>}></Route>
                </Paper>
            </Switch>
        </div>
    );
}

export default App;
