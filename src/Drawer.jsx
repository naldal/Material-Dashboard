import React from 'react';
import {Drawer as MUIDrawer , List,ListItem,ListItemIcon,ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles' 

const useStyles = makeStyles({
  drawer: {
    width: '260px'
  }
})

const Drawer = () => {

    const classes = useStyles();
    const itemList = [
      {text:'aaa'},
      {text:'aaa'},
      {text:'aaa'},
      {text:'aaa'},
      {text:'aaa'},
      {text:'aaa'},
      {text:'aaa'}
    ];

    return (
        <MUIDrawer variant="permanent" className={classes.drawer}>
          <List>
            {itemList.map((item, index) => {
              const { text } = item;
              return (
              <ListItem button key={text}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )})}
          </List>
        </MUIDrawer>
    );
};

export default Drawer;