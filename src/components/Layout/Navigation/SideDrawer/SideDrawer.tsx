import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Drawer from '@material-ui/core/Drawer';
import { useTheme } from '@material-ui/core/styles';
import SideDrawerStyles from './SideDrawerStyles';

const SideDrawer = (props: {
  currentStatus: boolean;
  handleDrawerToggle?: () => void;
  variant?: 'permanent' | 'persistent' | 'temporary' | undefined;
}): JSX.Element => {
  const classes = SideDrawerStyles();
  const theme = useTheme();

  return (
    <Drawer
      variant={props.variant ? props.variant : 'temporary'}
      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
      open={props.currentStatus}
      onClose={props.handleDrawerToggle}
      classes={{
        paper: classes.drawerPaper
      }}
      ModalProps={{
        keepMounted: true // Better open performance on mobile.
      }}
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
