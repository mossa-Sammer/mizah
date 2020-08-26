import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  const [defaultValues, setFormDefaultValues] = useState({});
  const route = '/api/v1/aboutus';
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(route);
        setFormDefaultValues(data.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div style={{ paddingLeft: 320 }}>
      <h1 className={classes.title}>About Us Page :</h1>
      <FormLayout page="aboutUs" defaultValues={defaultValues} route={route} />
    </div>
  );
};

export default withStyles(style)(AboutUs);
