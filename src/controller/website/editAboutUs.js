const { editAboutUs } = require('../../database/queries/webSiteSetting');

module.exports = async (req, res, next) => {
  const {
    description,
    descriptionAr,
    ourMission,
    ourMissionAr,
    ourValues,
    ourValuesAr,
    ourVision,
    ourVisionAr,
    videoUrl,
    videoUrlAr,
  } = req.body;
  try {
    const {
      rows: [websiteAboutUs],
    } = await editAboutUs({
      description,
      descriptionAr,
      ourMission,
      ourMissionAr,
      ourValues,
      ourValuesAr,
      ourVision,
      ourVisionAr,
      videoUrl,
      videoUrlAr,
    });
    res.json(websiteAboutUs);
  } catch (e) {
    next(e);
  }
};
