import { makeStyles } from '@material-ui/core';
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

  return (
    <div className={classes.container}>  
      <Drawer className={classes.drawer} />
      <Switch>
        <Route exact path="/" render={(props) => <Default {...props}/>}></Route>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;
