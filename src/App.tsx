import React from 'react';
import InputField from './components/Layout/FormFields/InputField/InputField';
import Layout from './components/Layout/Layout';
import AppStyles from './AppStyles';

const App: React.FC = (): JSX.Element => {
  const name = '';
  const classes = AppStyles();

  return (
    <div className={classes.root}>
      <Layout />
    </div>
  );
};

export default App;
