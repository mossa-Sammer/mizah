const connection = require('../../config/connection');
const multiRowInsert = require('../helper/multiRowInsert');

const addProject = ({ title, titleAr, description, descriptionAr }) =>
  connection.query(
    'INSERT INTO project (title,title_ar,description,description_ar) VALUES ($1,$2,$3,$4) RETURNING *',
    [title, titleAr, description, descriptionAr]
  );

const addProjectImages = (projectId, images) => {
  console.log(11111111111111, images);
  const { preparedStatment, values } = multiRowInsert(images, projectId);
  return connection.query(
    `INSERT INTO project_image (project_id, image) VALUES ${preparedStatment} RETURNING *`,
    values
  );
};

module.exports = { addProject, addProjectImages };
