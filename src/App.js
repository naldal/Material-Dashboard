import { ThemeProvider, CssBaseline, createMuiTheme} from '@material-ui/core';
import React from 'react';
import AppHeader from './AppHeader';
import Components from "./Components";

const theme = createMuiTheme({
    overrides: {
        MuiChip: {
            sizeSmall: {
                height: "18px"
            },
            labelSmall: {
                fontSize: "0.6rem"
            }
        },
        MuiCardHeader: {
            title: {
                fontSize: "1rem"
            }
        }
    },
    typography: {
        fontFamily: [
            'Nunito',
            'sans-serif'
        ].join(',')
    },

})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppHeader />
            <Components />
        </ThemeProvider>
    );
}

export default App;
