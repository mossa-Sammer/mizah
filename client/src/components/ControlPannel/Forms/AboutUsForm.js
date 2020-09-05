import React from 'react';
import Controls from '../../controls/Controls';
import UploadImage from '../../UploadImage';

export default function AboutUsForm({ values, handleInputChange, errors = {}, setImage, image }) {
  const img =
    image && image.length > 0
      ? image
      : [{ url: values.image_url, name: 'about us', preview: values.image_url }];
  return (
    <>
      <Controls.Input
        label="Enter Data EN"
        name="description"
        value={values.description}
        onChange={handleInputChange}
        error={errors.description}
        multiline
        required
      />
      {/* <div>
        <UploadImage setFiles={setImage} files={img} />
      </div> */}
      <Controls.Input
        label="Enter Data EN"
        name="descriptionAr"
        value={values.descriptionAr}
        onChange={handleInputChange}
        error={errors.descriptionAr}
        multiline
        required
      />
      <Controls.Input
        label="Video Link"
        name="videoUrl"
        value={values.videoUrl}
        onChange={handleInputChange}
        error={errors.videoUrl}
        required
      />
      <Controls.Input
        label="Enter Data EN"
        name="ourMission"
        value={values.ourMission}
        onChange={handleInputChange}
        error={errors.ourMission}
        multiline
        required
      />
      <Controls.Input
        label="Enter Data EN"
        name="ourMissionAr"
        value={values.ourMissionAr}
        onChange={handleInputChange}
        error={errors.ourMissionAr}
        multiline
        required
      />
      <Controls.Input
        label="Our Values EN"
        name="ourValues"
        value={values.ourValues}
        onChange={handleInputChange}
        error={errors.ourValues}
        multiline
        required
      />
      <Controls.Input
        label="Our Values AR"
        name="ourValuesAr"
        value={values.ourValuesAr}
        onChange={handleInputChange}
        error={errors.ourValuesAr}
        multiline
        required
      />
      <Controls.Input
        label="Our Vision EN"
        name="ourVision"
        value={values.ourVision}
        onChange={handleInputChange}
        error={errors.ourVision}
        multiline
        required
      />
      <Controls.Input
        label="Our Vision AR"
        name="ourVisionAr"
        value={values.ourVisionAr}
        onChange={handleInputChange}
        error={errors.ourVisionAr}
        multiline
        required
      />
    </>
  );
}
