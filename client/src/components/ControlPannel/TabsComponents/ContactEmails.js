import React from 'react';
import { withStyles } from '@material-ui/core';

const style = {
  title: {
    color: 'green',
  },
};

const ContactEmails = ({ classes }) => {
  return (
    <div>
      <h1 className={classes.title}>Hi from contact Emails</h1>
    </div>
  );
};

export default withStyles(style)(ContactEmails);
