const connection = require('../../config/connection');

const updateProject = ({
  id,
  title,
  titleAr,
  description,
  descriptionAr,
  imageUrl,
}) =>
  connection.query(
    'UPDATE project SET title=$1,title_ar=$2,description=$3,description_ar=$4,image_url=$5 WHERE project_id=$6 RETURNING *',
    [title, titleAr, description, descriptionAr, imageUrl, id]
  );

module.exports = updateProject;
