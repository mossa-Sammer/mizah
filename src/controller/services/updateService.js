const { services } = require('../../database/queries');

module.exports = async (req, res, next) => {
  const { id, title, titleAr, description, descriptionAr, imageUrl } = req.body;
  try {
    const { rows } = await services.updateService({
      id,
      title,
      titleAr,
      description,
      descriptionAr,
      imageUrl,
    });
    res.json(rows);
  } catch (e) {
    next(e);
  }
};
