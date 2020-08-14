import React from 'react';
import Controls from '../../controls/Controls';

export default function FeatureItemForm({ values, handleInputChange, errors = {} }) {
  return (
    <>
      <Controls.Input
        name="titleEn"
        label="Title"
        value={values.titleEn}
        onChange={handleInputChange}
        error={errors.titleEn}
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
        name="descriptionEn"
        value={values.descriptionEn}
        onChange={handleInputChange}
        error={errors.descriptionEn}
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
