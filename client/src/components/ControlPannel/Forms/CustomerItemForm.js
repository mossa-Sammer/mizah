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
      <div>
        <UploadImage setFiles={setImage} files={image} />
      </div>
    </>
  );
}
