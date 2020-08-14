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
        value={values.nameEn}
        onChange={handleInputChange}
        error={errors.nameEn}
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
        name="saidEn"
        value={values.saidEn}
        onChange={handleInputChange}
        error={errors.saidEn}
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
