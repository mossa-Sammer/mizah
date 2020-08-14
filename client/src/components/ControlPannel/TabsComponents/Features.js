import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormLayout from '../FormLayout';
import { BtnContainer, TitleContainer } from './styled';

import Table from '../../Table';
import { RemoveRejoinCol } from '../../Table/tableSharedData';

const rowClick = () => console.log('Row has been clicked');

const style = {
  title: {
    color: '#8368af',
    textAlign: 'left',
    paddingLeft: '20px',
    marginBottom: 30,
  },
};

export const earnGroupMembersData = [
  {
    title: 'Jackie Jensen',
    titleAr: 'sss Jenssssen',
    description: 'sss Jenssssen',
    descriptionAr: 'sss Jenssssen',
    btnName: 'sss Jenssddssen',
    btnNameAR: 'sss Jenssddssen',
  },
  {
    title: 'Jackie Jensen',
    titleAr: 'sss Jenssssen',
    description: 'sss Jenssssen',
    descriptionAr: 'sss Jenssssen',
    btnName: 'sss Jenssddssen',
    btnNameAR: 'sss Jenssddssen',
  },
];

const Features = ({ classes }) => {
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    // here should get the data when openForm state change
  }, [openForm]);

  return (
    <div style={{ paddingLeft: 320 }}>
      <TitleContainer>
        <h1 className={classes.title}>Features Page :</h1>
        <BtnContainer>
          <Button
            variant="contained"
            color={openForm ? 'secondary' : 'primary'}
            onClick={() => {
              setOpenForm(old => !old);
            }}
          >
            {openForm ? 'Back' : 'Add New'}
          </Button>
        </BtnContainer>
      </TitleContainer>
      {openForm ? (
        <FormLayout page="features" />
      ) : (
        <Table
          hideSearch
          color="blue"
          data={earnGroupMembersData}
          showPagination={false}
          columns={[
            { title: 'Title', field: 'title' },
            { title: 'Title AR', field: 'titleAr' },
            { title: 'Description', field: 'description' },
            { title: 'Description AR', field: 'descriptionAr' },
            RemoveRejoinCol,
          ]}
          onRowClick={rowClick}
        />
      )}
    </div>
  );
};

export default withStyles(style)(Features);
