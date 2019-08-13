import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseLine';
import Layout from './components/Layout/Layout';
import useStyles from './AppStyles';

const App: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseLine />
      <Layout />
    </div>
  );
};

export default App;
