import { makeStyles, CssBaseline, createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Default from './Default';
import Drawer from './Drawer.jsx';

const useStyle = makeStyles({
    container: {
        display: "flex"
    },
})

function App() {
    const classes = useStyle();

    const theme = createMuiTheme({
        // palette: {
        //     type: '#1b2430',
        // },
    });
  

    return (
        <div className={classes.container}>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Drawer className={classes.drawer} />
            </ThemeProvider>
            <Switch>
                <Route exact path="/" render={(props) => <Default {...props}/>}></Route>
                <Route></Route>
            </Switch>
        </div>
    );
}

export default App;
