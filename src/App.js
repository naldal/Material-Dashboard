import { makeStyles, CssBaseline, createMuiTheme} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppHeader from './AppHeader';
import Default from './Default';
import Drawer from './Drawer.jsx';

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
                <Route exact path="/" render={(props) => <Default {...props}/>}></Route>
                <Route></Route>
            </Switch>
        </div>
    );
}

export default App;
