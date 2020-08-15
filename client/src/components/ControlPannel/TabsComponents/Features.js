import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormLayout from '../FormLayout';
import { BtnContainer, TitleContainer } from './styled';

import Table from '../../Table';
import { RemoveRejoinCol } from '../../Table/tableSharedData';


const style = {
  title: {
    color: '#8368af',
    textAlign: 'left',
    paddingLeft: '20px',
    marginBottom: 30,
  },
};


const Features = ({ classes }) => {
  const [openForm, setOpenForm] = useState(false);
  const [data, setData] = useState([])
  const route = '/api/v1/feature';

  const rowClick = async (rowData, route) => {
    try{
      setData(old => old.filter(e => e.feature_id !== rowData.feature_id))
      const data = await axios.delete(`${route}/${rowData.feature_id}`)
    } catch(e){
      console.log(e)
    }
  }


  useEffect( () => {
    (async () => {
      try {
      
      const data = await axios.get('/api/v1/feature')
      console.log(data)
      setData(data.data)
    } catch(e) {
      console.log(e)
    }
    })()
  
    }, [openForm])

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
        <FormLayout page="features" route={route} setOpenForm={setOpenForm}/>
      ) : (
        <Table
          hideSearch
          color="blue"
          data={data}
          showPagination={false}
          columns={[
            { title: 'Title', field: 'title' },
            { title: 'Title AR', field: 'title_ar' },
            { title: 'Description', field: 'description' },
            { title: 'Description AR', field: 'description_ar' },
            RemoveRejoinCol,
          ]}
          onRowClick={(e, rowData) => rowClick(rowData, route) }
        />
      )}
    </div>
  );
};

export default withStyles(style)(Features);
