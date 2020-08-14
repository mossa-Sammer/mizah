import React from 'react';
import { withStyles } from '@material-ui/core';

const style = {
  title: {
    color: 'green',
  },
};

const Projects = ({ classes }) => {
  return (
    <div>
      <h1 className={classes.title}>Hi from Projects</h1>
    </div>
  );
};

export default withStyles(style)(Projects);
