import React from 'react';
import { withStyles } from '@material-ui/core';

const style = {
  title: {
    color: 'green',
  },
};

const Blog = ({ classes }) => {
  return (
    <div>
      <h1 className={classes.title}>Hi from Blog</h1>
    </div>
  );
};

export default withStyles(style)(Blog);