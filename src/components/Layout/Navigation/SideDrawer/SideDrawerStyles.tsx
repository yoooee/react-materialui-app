import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../NavigationStyles';

const SideDrawerStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    }
  })
);

export default SideDrawerStyles;
