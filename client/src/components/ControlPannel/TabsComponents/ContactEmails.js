import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core';
import axios from 'axios';

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

const ContactEmails = ({ classes }) => {
  const [emails, setEmails] = useState([]);
  const route = '/api/v1/message';
  const deleteRow = async (rowData, route) => {
    try{
      setEmails(old => old.filter(e => e.message_id !== rowData.message_id))
      await axios.delete(`${route}/${rowData.message_id}`)
    } catch(e){
      console.log(e)
    }
  }
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/v1/message');
      setEmails(data);
    })();
  }, []);
  return (
    <div style={{ paddingLeft: 320 }}>
      <TitleContainer>
        <h1 className={classes.title}>Contact Emails Page :</h1>
      </TitleContainer>

      <Table
        hideSearch
        color="blue"
        data={emails}
        showPagination={false}
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Email', field: 'email' },
          { title: 'Phone No', field: 'phone_no' },
          { title: 'Body', field: 'body' },
          RemoveRejoinCol({onDelete: (row) => {deleteRow(row, route)},
     }),
        ]}
        onRowClick={rowClick}
      />
    </div>
  );
};

export default withStyles(style)(ContactEmails);
