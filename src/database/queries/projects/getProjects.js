const connection = require('../../config/connection');

const getProjects = () =>
  connection.query(
    'SELECT project.*,JSON_AGG(project_image) as project_images FROM project LEFT JOIN project_image ON project.project_id=project_image.project_id GROUP BY project.project_id'
  );

module.exports = getProjects;
