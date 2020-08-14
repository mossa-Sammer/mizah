import React from 'react';
import Controls from '../../controls/Controls';
import UploadImage from '../../UploadImage';

export default function AboutUsForm({ values, handleInputChange, errors = {}, setImage, image }) {
  return (
    <>
      <Controls.Input
        label="Enter Data EN"
        name="dateEn"
        value={values.dateEn}
        onChange={handleInputChange}
        error={errors.dateEn}
        multiline
      />
      <div>
        <UploadImage setFiles={setImage} files={image} />
      </div>
      <Controls.Input
        label="Enter Data EN"
        name="dateAr"
        value={values.dateAr}
        onChange={handleInputChange}
        error={errors.dateAr}
        multiline
      />
    </>
  );
}
