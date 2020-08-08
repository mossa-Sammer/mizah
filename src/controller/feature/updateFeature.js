const { feature } = require('../../database/queries');
module.exports = async (req, res, next) => {
  const { id, title, titleAr, description, descriptionAr } = req.body;
  try {
    const {
      rows: [updatedFeature],
    } = await feature.updateFeature({
      id,
      title,
      titleAr,
      description,
      descriptionAr,
    });
    res.json({
      msg: 'feature updated successfully',
      updatedFeature,
    });
  } catch (e) {
    next(e);
  }
};
