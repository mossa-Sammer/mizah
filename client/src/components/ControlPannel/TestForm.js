import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Controls from '../controls/Controls';
import { useForm, Form } from '../controls/useForm';

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
];

const initialFValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  isPermanent: false,
};

export default function EmployeeForm({ errors, values, handleInputChange }) {
  return (
    <>
      <Controls.Input
        name="fullName"
        label="Full Name"
        value="values.fullName"
        onChange={handleInputChange}
        error={errors.fullName}
      />
      <Controls.Input
        label="Email"
        name="email"
        value={values.email}
        onChange={handleInputChange}
        error={errors.email}
      />
      <Controls.Input
        label="Mobile"
        name="mobile"
        value={values.mobile}
        onChange={handleInputChange}
        error={errors.mobile}
      />
      <Controls.Input label="City" name="city" value={values.city} onChange={handleInputChange} />
    </>
  );
}
