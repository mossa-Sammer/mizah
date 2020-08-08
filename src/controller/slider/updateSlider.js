const { updateSlider } = require('../../database/queries/slider');

module.exports = async (req, res, next) => {
  const {
    id,
    title,
    titleAr,
    description,
    descriptionAr,
    btnName,
    btnNameAr,
    btnLink,
  } = req.body;

  try {
    const {
      rows: [updatedSlider],
    } = await updateSlider({
      id,
      title,
      titleAr,
      description,
      descriptionAr,
      btnName,
      btnNameAr,
      btnLink,
    });
    res.json({ msg: 'slider updated successfully', updatedSlider });
  } catch (e) {
    next(e);
  }
};
