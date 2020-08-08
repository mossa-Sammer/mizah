const connection = require('../../config/connection');

const updateSlider = ({
  id,
  title,
  titleAr,
  description,
  descriptionAr,
  btnName,
  btnNameAr,
  btnLink,
}) =>
  connection.query(
    'UPDATE slider SET title=$1,title_ar=$2,description=$3,description_ar=$4,btn_name=$5,btn_name_ar=$6,btn_link=$7 WHERE slider_id=$8 RETURNING *',
    [
      title,
      titleAr,
      description,
      descriptionAr,
      btnName,
      btnNameAr,
      btnLink,
      id,
    ]
  );

module.exports = updateSlider;
