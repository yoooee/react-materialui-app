import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import BaseTheme from './Themes/BaseTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';
import 'typeface-roboto';

ReactDOM.render(
  <MuiThemeProvider theme={BaseTheme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
