const { editAboutUs } = require('../../database/queries/webSiteSetting');

module.exports = async (req, res, next) => {
  const { description, descriptionAr, imageUrl } = req.body;
  try {
    const {
      rows: [websiteAboutUs],
    } = await editAboutUs({
      description,
      descriptionAr,
      imageUrl,
    });
    res.json(websiteAboutUs);
  } catch (e) {
    next(e);
  }
};
