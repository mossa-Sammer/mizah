/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { withStyles } from '@material-ui/core';

// withStyles & makeStyles

const style = {
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0px',
    width: '320px',
    height: '100%',
    backgroundColor: '#253053',
    paddingTop: 100,
  },
  list: {
    listStyle: 'none',
    marign: 0,
    padding: 0,
  },
  listItem: {
    color: 'white',
    margin: '5px 0',
    padding: '10px 0',
    backgroundColor: '#724ab8',
    fontSize: 18,
    fontWight: 'bold',
    transition: 'background-color .3s',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#9767ec',
      cursor: 'pointer',
      transition: 'background-color .3s',
    },
    '&:first-child': {
      marginTop: 0,
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
};

const SideMenu = props => {
  const { classes, setCurrentTab } = props;
  const tabs = [
    // { tab: 'slider', title: 'Slider' },
    { tab: 'aboutUs', title: 'About Us' },
    { tab: 'services', title: 'Services' },
    { tab: 'testimonials', title: 'Testimonials' },
    { tab: 'projects', title: 'Projects' },
    // { tab: 'customers', title: 'Customers' },
    { tab: 'features', title: 'Features' },
    { tab: 'settings', title: 'Settings' },
    // { tab: 'blog', title: 'Blog' },
    { tab: 'contactEmails', title: 'Contact Emails' },
  ];
  return (
    <div className={classes.sideMenu}>
      <ul className={classes.list}>
        {tabs.map(e => (
          <li
            className={classes.listItem}
            onClick={() => {
              setCurrentTab(e.tab);
            }}
          >
            {e.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withStyles(style)(SideMenu);
