import React from 'react';
import * as S from './style';

const Table = ({ columns, data, onRowClick, hideSearch, memberMobile, tabbedData }) => {
  const rowStyle = {
    display: memberMobile && 'flex',
    borderBottom: '1px solid red',
    marginBottom: 2,
  };

  const cellStyle = {
    borderBottomWidth: 3,
    borderBottomColor: '#fff',
    fontSize: '0.875rem',
    color: '#fff',
    fontWeight: '400',
  };
  const searchFieldStyle = {
    fontSize: '14px',
    color: '#ccc',
    border: `1px solid #777`,
    borderRadius: '10px',
    height: '50px',
    minWidth: '240px',
    maxWidth: '300px',
    background: '#fff',
    paddingLeft: '10px',
    marginLeft: '-20px',
    marginBottom: tabbedData ? '63px' : '10px',
    '&::placeholder': {
      background: 'green',
    },
  };

  const headerStyle = {
    backgroundColor: '#483569',
    color: '#daaf81',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '0.875rem',
    borderBottom: `2px solid black`,
    display: memberMobile && 'none',
  };

  const style = {
    boxShadow: 'none',
    background: '#333',
    width: '100%',
    color: '#fff',
  };

  return (
    <S.TableContainer>
      <S.StyledTable
        columns={columns}
        data={data}
        onRowClick={onRowClick}
        rowsPerPageOptions={[]}
        localization={{
          body: {
            emptyDataSourceMessage: (
              <p
                color="gray3"
                style={{
                  padding: '20px',
                  textAlign: 'center',
                }}
              >
                No records to display
              </p>
            ),
          },
        }}
        options={{
          showTitle: false,
          paging: false,
          toolbar: !hideSearch,
          searchFieldAlignment: 'left',
          sorting: true,
          grouping: false,
          defaultExpanded: true,
          headerStyle,
          rowStyle,
          cellStyle,
          searchFieldStyle,
        }}
        style={style}
      />
    </S.TableContainer>
  );
};

export default Table;