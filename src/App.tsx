import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseLine';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Layout from './components/Layout/Layout';
import BaseTheme from './Themes/BaseTheme';
import AppStyles from './AppStyles';

const App: React.FC = (): JSX.Element => {
  const classes = AppStyles();

  return (
    <div className={classes.root}>
      <CssBaseLine />
      <MuiThemeProvider theme={BaseTheme}>
        <Layout />
      </MuiThemeProvider>
    </div>
  );
};

export default App;
