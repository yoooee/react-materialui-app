import React from 'react';

import Layout from './components/Layout/Layout';
import AppStyles from './AppStyles';

const App: React.FC = (): JSX.Element => {
  const classes = AppStyles();

  return (
    <div className={classes.root}>
      <Layout />
    </div>
  );
};

export default App;
