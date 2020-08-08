const connection = require('../../config/connection');

const updateService = ({
  id,
  title,
  titleAr,
  description,
  descriptionAr,
  imageUrl,
}) =>
  connection.query(
    'UPDATE service SET title=$1, title_ar=$2, description=$3, description_ar=$4, image_url=$5 WHERE service_id=$6 RETURNING *',
    [title, titleAr, description, descriptionAr, imageUrl, id]
  );

module.exports = updateService;
