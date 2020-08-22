import React from 'react';
import TableActions from './TableActions';

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

export const RemoveRejoinCol = ({ onDelete, onEdit }) => ({
  title: 'action',
  field: 'removeRejoin',
  disableClick: true,
  render: rowData => (
    <TableActions
      type="Remove"
      actions={{
        onDelete: onDelete && {
          handleClick: () => onDelete(rowData),
        },
        onEdit: onEdit && {
          handleClick: () => onEdit(rowData),
        },
      }}
    />
  ),
});
