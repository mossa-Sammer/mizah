const connection = require('../../config/connection');

const addSlider = ({
  title,
  titleAr,
  description,
  descriptionAr,
  btnName,
  btnNameAr,
  btnLink,
}) =>
  connection.query(
    'INSERT INTO slider (title,title_ar,description,description_ar,btn_name,btn_name_ar,btn_link) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
    [title, titleAr, description, descriptionAr, btnName, btnNameAr, btnLink]
  );

module.exports = addSlider;
