import React from 'react';
import { withStyles } from '@material-ui/core';

import { TitleContainer } from './styled';

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
    name: 'fadi oamr',
    email: 'fadeomar2015@gmail.com',
    phoneNo: '21341465',
    body: 'sasd asd asd asa',
  },
];

const ContactEmails = ({ classes }) => {
  return (
    <div style={{ paddingLeft: 320 }}>
      <TitleContainer>
        <h1 className={classes.title}>Contact Emails Page :</h1>
      </TitleContainer>

      <Table
        hideSearch
        color="blue"
        data={earnGroupMembersData}
        showPagination={false}
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Email', field: 'email' },
          { title: 'Phone No', field: 'phoneNo' },
          { title: 'Body', field: 'body' },
          RemoveRejoinCol,
        ]}
        onRowClick={rowClick}
      />
    </div>
  );
};

export default withStyles(style)(ContactEmails);
