import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Default from "./Default";
import Test from "./Test";

function Components() {
    return (
        <>
            <Switch>
                <Route exact path="/" render={(props) => <Default {...props}/>}></Route>
                <Route exact path="/test" render={(props) => <Test {...props}/>}></Route>
            </Switch>
        </>
    )
}

export default Components;