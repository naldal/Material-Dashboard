import React from 'react';
import {Drawer as MUIDrawer , List,ListItem,ListItemIcon,ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles' 

const useStyles = makeStyles({

})

const Drawer = () => {

    const classes = useStyles();

    return (
        <MUIDrawer variant="permanent">
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </MUIDrawer>
    );
};

export default Drawer;