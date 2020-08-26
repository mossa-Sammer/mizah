import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core';
import axios from 'axios';
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
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      const result = await axios.get('/api/v1/setting');
      if (result.data) {
        setData(result.data);
      }
    })();
  }, []);
  return (
    <div style={{ paddingLeft: 320 }}>
      <h1 className={classes.title}>Settings Page :</h1>
      <FormLayout page="settings" defaultValues={data} route="/api/v1/setting" />
    </div>
  );
};

export default withStyles(style)(Settings);
