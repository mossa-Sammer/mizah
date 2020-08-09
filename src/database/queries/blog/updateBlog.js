const connection = require('../../config/connection');

const updateBlog = ({
  id,
  title,
  titleAr,
  description,
  descriptionAr,
  imageUrl,
}) =>
  connection.query(
    'UPDATE blog SET title=$1,title_ar=$2,description=$3,description_ar=$4, image_url=$5 WHERE blog_id=$6 RETURNING *',
    [title, titleAr, description, descriptionAr, imageUrl, id]
  );

module.exports = updateBlog;
