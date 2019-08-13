import React, { useState } from 'react';
import Hidden from '@material-ui/core/Hidden';
import SideDrawer from './SideDrawer/SideDrawer';
import Navbar from './Navbar/Navbar';
import NavigationStyles from './NavigationStyles';

const Navigation = (): JSX.Element => {
  const classes = NavigationStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleDrawer = (): void => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Navbar handleDrawerToggle={toggleDrawer} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <SideDrawer
            currentStatus={mobileOpen}
            handleDrawerToggle={toggleDrawer}
          />
        </Hidden>
        <Hidden xsDown implementation="css">
          <SideDrawer variant="permanent" currentStatus={true} />
        </Hidden>
      </nav>
    </>
  );
};

export default Navigation;
