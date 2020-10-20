import { makeStyles, CssBaseline, createMuiTheme} from '@material-ui/core';
import React from 'react';
import AppHeader from './AppHeader';

import Components from "./Components";


function App() {
    return (

        <div>
            <CssBaseline />
            <AppHeader />
            <Components />

        </div>
    );
}

export default App;
