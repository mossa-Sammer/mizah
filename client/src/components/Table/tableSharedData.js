import React from 'react';
import RemoveRejoin from './RemoveRejoin';

export const nameJoinDateCol = {
  title: 'Member / Join Date',
  field: 'member',
  customSort: (a, b) => a.name - b.name,
  render: rowData => (
    <>
      <p>{rowData.member}</p> <p>{rowData.date}</p>
    </>
  ),
};

export const RemoveRejoinCol = {
  title: 'action',
  field: 'removeRejoin',
  disableClick: true,
  render: rowData => (
    <RemoveRejoin
      type="Remove"
      handleClick={() => {
        console.log('custom function to go here');
      }}
    />
  ),
};
