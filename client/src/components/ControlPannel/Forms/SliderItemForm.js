import React from 'react';
import Controls from '../../controls/Controls';

export default function SliderItemForm({ values, handleInputChange, errors = {} }) {
  return (
    <>
      <Controls.Input
        name="title"
        label="Title EN"
        value={values.titleEn}
        onChange={handleInputChange}
        error={errors.titleEn}
        required
      />
      <Controls.Input
        label="Description EN"
        name="description"
        value={values.descriptionEn}
        onChange={handleInputChange}
        error={errors.descriptionEn}
        multiline
        required
      />
      <Controls.Input
        name="btnName"
        label="btn Name EN"
        value={values.btnNameEn}
        onChange={handleInputChange}
        error={errors.btnNameEn}
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
        label="Description AR"
        name="descriptionAr"
        value={values.descriptionAr}
        onChange={handleInputChange}
        error={errors.descriptionAr}
        multiline
        required
      />
      <Controls.Input
        name="btnNameAr"
        label="btn Name AR"
        value={values.btnNameAr}
        onChange={handleInputChange}
        error={errors.btnNameAr}
        required
      />
      <Controls.Input
        name="btnLink"
        label="btn Link"
        value={values.btnLink}
        onChange={handleInputChange}
        error={errors.btnLink}
        required
      />
    </>
  );
}
