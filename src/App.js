import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Default from './Default';
import Drawer from './Drawer.jsx';

function App() {
  return (
    <>  
      <Drawer />
      <Switch>
        <Route exact path="/" render={(props) => <Default {...props}/>}></Route>
        <Route></Route>
      </Switch>
    </>
  );
}

export default App;
