const connection = require('../../config/connection');

const addProject = ({ title, titleAr, description, descriptionAr, imageUrl }) =>
  connection.query(
    'INSERT INTO project (title,title_ar,description,description_ar,image_url) VALUES ($1,$2,$3,$4,$5) RETURNING *',
    [title, titleAr, description, descriptionAr, imageUrl]
  );

module.exports = addProject;
