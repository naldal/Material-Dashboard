import React from 'react';
import {Switch, Route, BrowserRouter, useParams, HashRouter} from 'react-router-dom';
import Default from "./Default";
import Test from "./Test";
import {Navigation} from "@material-ui/icons";

function Components() {
    return (
        <>
            <HashRouter>
                <Navigation />
                <Route exact path="/" render={(props) => <Default {...props}/>}></Route>
                <Route exact path="/test" render={(props) => <Test {...props}/>}></Route>
            </HashRouter>
        </>
    )
}

export default Components;