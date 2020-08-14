import React from 'react';
import { withStyles } from '@material-ui/core';
import FormLayout from '../FormLayout';

const style = {
  title: {
    color: '#8368af',
    textAlign: 'left',
    paddingLeft: '20px',
    marginBottom: 30,
  },
};

const Settings = ({ classes }) => {
  return (
    <div style={{ paddingLeft: 320 }}>
      <h1 className={classes.title}>Settings Page :</h1>
      <FormLayout page="settings" />
    </div>
  );
};

export default withStyles(style)(Settings);
