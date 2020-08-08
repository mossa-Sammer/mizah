const { addSlider } = require('../../database/queries/slider');

module.exports = async (req, res, next) => {
  const {
    title,
    titleAr,
    description,
    descriptionAr,
    btnName,
    btnNameAr,
    btnLink,
  } = req.body;

  try {
    const { rows } = await addSlider({
      title,
      titleAr,
      description,
      descriptionAr,
      btnName,
      btnNameAr,
      btnLink,
    });
    console.log(rows);
    res.json({ msg: 'slider added successfully', rows });
  } catch (e) {
    next(e);
  }
};
