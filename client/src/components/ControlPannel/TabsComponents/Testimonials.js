import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core';

const style = {
  title: {
    color: 'green',
  },
};

const Testimonials = ({ classes }) => {
  return (
    <div>
      <h1 className={classes.title}>Hi from Testimonials</h1>
    </div>
  );
};

export default withStyles(style)(Testimonials);
