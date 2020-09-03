import React from 'react';
import Controls from '../../controls/Controls';
import UploadImage from '../../UploadImage';

export default function CustomerItemForm({
  values,
  handleInputChange,
  errors = {},
  setImage,
  image,
}) {
  return (
    <>
      <Controls.Input
        name="name"
        label="Customer Name"
        value={values.name}
        onChange={handleInputChange}
        error={errors.name}
        required
      />
      <Controls.Input
        name="nameAr"
        label="Customer Name Ar"
        value={values.nameAr}
        onChange={handleInputChange}
        error={errors.nameAr}
        required
      />
      <div>
        <UploadImage setFiles={setImage} files={image} />
      </div>
    </>
  );
}
