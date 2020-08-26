import React from 'react';
import Controls from '../../controls/Controls';
import UploadImage from '../../UploadImage';

export default function AboutUsForm({ values, handleInputChange, errors = {}, setImage, image }) {
    const img = image && image.length > 0 ? image : [{url: values.image_url, name: 'about us', preview: values.image_url}];
  return (
    <>
      <Controls.Input
        label="Enter Data EN"
        name="description"
        value={values.description}
        onChange={handleInputChange}
        error={errors.description}
        multiline
      />
      <div>
        <UploadImage setFiles={setImage} files={img} />
      </div>
      <Controls.Input
        label="Enter Data EN"
        name="descriptionAr"
        value={values.descriptionAr}
        onChange={handleInputChange}
        error={errors.descriptionAr}
        multiline
      />
    </>
  );
}
