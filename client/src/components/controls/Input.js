/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TextField } from '@material-ui/core';

export default function Input(props) {
  const { name, label, value, error = null, onChange, multiline } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      multiline={multiline}
      rows={multiline && 4}
      {...(error && { error: true, helperText: error })}
      style={{ marginBottom: 30 }}
      required
      InputLabelProps={{ shrink: value && true }}
    />
  );
}
