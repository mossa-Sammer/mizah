import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { AppBar, Toolbar, Grid, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#253053',
  },
  searchInput: {
    opacity: '0.6',
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1),
    },
  },
}));

export default function Header({ setIsAuth }) {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = async () => {
    try {
      await axios.post('/api/v1/logout')
      setIsAuth(false);
      history.push('/admin');

    } catch (e) {
      console.log(e)
    }
  }
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container xs={12} justify="flex-end">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClick}
          >
            Log out
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
