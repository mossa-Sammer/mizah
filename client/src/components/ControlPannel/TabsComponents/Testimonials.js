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
    name: 'Jackie Jensen',
    nameAr: 'sss Jenssssen',
    said: 'sss Jenssssen',
    saidAr: 'sss Jenssssen',
  },
];

const Testimonials = ({ classes }) => {
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    // here should get the data when openForm state change
  }, [openForm]);

  return (
    <div style={{ paddingLeft: 320 }}>
      <TitleContainer>
        <h1 className={classes.title}>Testimonials Page :</h1>
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
        <FormLayout page="testimonial" />
      ) : (
        <Table
          hideSearch
          color="blue"
          data={earnGroupMembersData}
          showPagination={false}
          columns={[
            { title: 'Name', field: 'name' },
            { title: 'Name AR', field: 'nameAr' },
            { title: 'said', field: 'said' },
            { title: 'said AR', field: 'saidAr' },
            RemoveRejoinCol,
          ]}
          onRowClick={rowClick}
        />
      )}
    </div>
  );
};

export default withStyles(style)(Testimonials);
