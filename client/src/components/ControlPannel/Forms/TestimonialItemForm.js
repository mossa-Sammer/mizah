import React from 'react';
import Controls from '../../controls/Controls';
import UploadImage from '../../UploadImage';

export default function testimonialItemForm({
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
        label="Name"
        value={values.name}
        onChange={handleInputChange}
        error={errors.name}
      />
      <Controls.Input
        name="nameAr"
        label="Name Ar"
        value={values.nameAr}
        onChange={handleInputChange}
        error={errors.nameAr}
      />
      <Controls.Input
        label="said"
        name="said"
        value={values.said}
        onChange={handleInputChange}
        error={errors.said}
        multiline
      />
      <Controls.Input
        label="said Ar"
        name="saidAr"
        value={values.saidAr}
        onChange={handleInputChange}
        error={errors.saidAr}
        multiline
      />

      <div>
        <UploadImage setFiles={setImage} files={image} />
      </div>
    </>
  );
}
