const connection = require('../../config/connection');
const multiRowInsert = require('../helper/multiRowInsert');

const addProject = ({ title, titleAr, description, descriptionAr, videoUrl }) =>
  connection.query(
    'INSERT INTO project (title,title_ar,description,description_ar,video_url) VALUES ($1,$2,$3,$4,$5) RETURNING *',
    [title, titleAr, description, descriptionAr, videoUrl]
  );

const addProjectImages = (projectId, images) => {
  const { preparedStatment, values } = multiRowInsert(images, projectId);
  return connection.query(
    `INSERT INTO project_image (project_id, image_url) VALUES ${preparedStatment} RETURNING *`,
    values
  );
};

module.exports = { addProject, addProjectImages };
