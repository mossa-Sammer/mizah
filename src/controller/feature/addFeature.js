const { feature } = require('../../database/queries');
module.exports = async (req, res, next) => {
  const { title, titleAr, description, descriptionAr } = req.body;
  try {
    const {
      rows: [addedFeature],
    } = await feature.addFeature({
      title,
      titleAr,
      description,
      descriptionAr,
    });
    res.json({
      msg: 'feature added successfully',
      addedFeature,
    });
  } catch (e) {
    next(e);
  }
};
