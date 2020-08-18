const connection = require('../../config/connection');
const multiRowInsert = require('../../queries/helper/multiRowInsert');

const updateProject = async ({
  id,
  title,
  titleAr,
  description,
  descriptionAr,
  imagesToAdd, //array
  imagesToDelete, //array
}) => {
  if (imagesToDelete) {
    await connection.query('DELETE FROM project_image WHERE project_id=$1', [
      id,
    ]);
  }
  if (imagesToAdd) {
    const { preparedStatment, values } = multiRowInsert(imagesToAdd, id);
    await connection.query(
      `INSERT INTO project_image (project_id,image) VALUES ${preparedStatment}`,
      values
    );
  }
  return connection.query(
    'UPDATE project SET title=$1,title_ar=$2,description=$3,description_ar=$4,image_url=$5 WHERE project_id=$6 RETURNING *',
    [title, titleAr, description, descriptionAr, imageUrl, id]
  );
};

module.exports = updateProject;
