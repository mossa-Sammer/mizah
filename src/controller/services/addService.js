const { services } = require('../../database/queries');

module.exports = async (req, res, next) => {
  const { title, titleAr, description, descriptionAr, imageUrl } = req.body;
  try {
    const { rows } = await services.addService({
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
