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

const AboutUs = ({ classes }) => {
  return (
    <div style={{ paddingLeft: 320 }}>
      <h1 className={classes.title}>About Us Page :</h1>
      <FormLayout page="aboutUs" />
    </div>
  );
};

export default withStyles(style)(AboutUs);
