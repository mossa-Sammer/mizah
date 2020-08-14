import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core';

const style = {
  title: {
    color: 'green',
  },
};

const Settings = ({ classes }) => {
  return (
    <div>
      <h1 className={classes.title}>Hi from settings</h1>
    </div>
  );
};

export default withStyles(style)(Settings);
