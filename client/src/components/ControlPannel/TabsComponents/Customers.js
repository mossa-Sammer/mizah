import React from 'react';
import { withStyles } from '@material-ui/core';

const style = {
  title: {
    color: 'green',
  },
};

const Customers = ({ classes }) => {
  return (
    <div>
      <h1 className={classes.title}>Hi from Customers</h1>
    </div>
  );
};

export default withStyles(style)(Customers);
