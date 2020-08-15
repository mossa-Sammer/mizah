import React from 'react';
import Controls from '../../controls/Controls';

export default function FeatureItemForm({ values, handleInputChange, errors = {} }) {
  return (
    <>
      <Controls.Input
        name="title"
        label="Title"
        value={values.title}
        onChange={handleInputChange}
        error={errors.title}
      />
      <Controls.Input
        name="titleAr"
        label="Title AR"
        value={values.titleAr}
        onChange={handleInputChange}
        error={errors.titleAr}
      />
      <Controls.Input
        label="Description"
        name="description"
        value={values.description}
        onChange={handleInputChange}
        error={errors.description}
        multiline
      />
      <Controls.Input
        label="Description AR"
        name="descriptionAr"
        value={values.descriptionAr}
        onChange={handleInputChange}
        error={errors.descriptionAr}
        multiline
      />
    </>
  );
}
