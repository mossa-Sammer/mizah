import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormLayout from '../FormLayout';
import { BtnContainer, TitleContainer, InlineImage } from './styled';

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

const Services = ({ classes }) => {
  const [openForm, setOpenForm] = useState(false);
  const [defaultValues, setFormDefaultValues] = useState(null);

  const [data, setData] = useState(null);
  const route = '/api/v1/service';

  const editRow = (rowData, route) => {
    setOpenForm(true);
    setFormDefaultValues(rowData);
  };
  const deleteRow = async (rowData, route) => {
    try {
      setData(old => old.filter(e => e.service_id !== rowData.service_id));
      const data = await axios.delete(`${route}/${rowData.service_id}`);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get('/api/v1/service');
        setData(data.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [openForm]);

  return (
    <div style={{ paddingLeft: 320 }}>
      <TitleContainer>
        <h1 className={classes.title}>Services Page :</h1>
        <BtnContainer>
          <Button
            variant="contained"
            color={openForm ? 'secondary' : 'primary'}
            onClick={() => {
              setOpenForm(old => !old);
              setFormDefaultValues(null);
            }}
          >
            {openForm ? 'Back' : 'Add New'}
          </Button>
        </BtnContainer>
      </TitleContainer>
      {openForm ? (
        <FormLayout
          defaultValues={defaultValues}
          page="services"
          route={route}
          setOpenForm={setOpenForm}
        />
      ) : (
        <Table
          hideSearch
          color="blue"
          data={data || []}
          showPagination={false}
          columns={[
            { title: 'Title', field: 'title' },
            { title: 'Title AR', field: 'title_ar' },
            { title: 'Description', field: 'description' },
            { title: 'Description AR', field: 'description_ar' },
            {
              title: 'Image',
              field: 'image_url',
              render: ({ image_url: imageUrl }) => <InlineImage src={imageUrl} />,
            },
            RemoveRejoinCol({
              onDelete: row => {
                deleteRow(row, route);
              },
              onEdit: row => {
                editRow(row);
              },
            }),
          ]}
          // onRowClick={(e, rowData) => rowClick(rowData, route)}
        />
      )}
    </div>
  );
};

export default withStyles(style)(Services);
