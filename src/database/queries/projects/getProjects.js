const connection = require('../../config/connection');

const getProjects = () =>
  connection.query(
    'SELECT * FROM project INNER JOIN project_image ON project.project_id=image.project_id '
  );

module.exports = getProjects;
