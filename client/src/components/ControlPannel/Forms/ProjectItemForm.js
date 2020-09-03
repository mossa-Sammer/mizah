import React from 'react';
import Controls from '../../controls/Controls';
import UploadImage from '../../UploadImage';

export default function ProjectItemForm({
  values,
  handleInputChange,
  errors = {},
  setImage,
  image,
}) {
  return (
    <>
      <Controls.Input
        name="title"
        label="Title"
        value={values.title}
        onChange={handleInputChange}
        error={errors.title}
        required
      />
      <Controls.Input
        name="titleAr"
        label="Title AR"
        value={values.titleAr}
        onChange={handleInputChange}
        error={errors.titleAr}
        required
      />
      <Controls.Input
        label="Description"
        name="description"
        value={values.description}
        onChange={handleInputChange}
        error={errors.description}
        multiline
        required
      />
      <Controls.Input
        label="Description AR"
        name="descriptionAr"
        value={values.descriptionAr}
        onChange={handleInputChange}
        error={errors.descriptionAr}
        multiline
        required
      />
      <Controls.Input
        label="video Link"
        name="videoUrl"
        value={values.videoUrl}
        onChange={handleInputChange}
        error={errors.videoUrl}
      />
      <div>
        <UploadImage setFiles={setImage} files={image} multiple/> 
      </div>
    </>
  );
}
