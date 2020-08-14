import React from 'react';
import { AppBar, Toolbar, Grid, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'green',
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

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container xs={12} justify="flex-end">
          <Button variant="contained" color="secondary" onClick={() => {}}>
            Log out
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
