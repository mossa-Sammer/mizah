const connection = require('../../config/connection');

const getProjectById = id =>
  connection.query(
    'SELECT project.*,JSON_AGG(project_image) as project_image FROM project LEFT JOIN project_image ON project.project_id=project_image.project_id WHERE project.project_id=$1 GROUP BY project.project_id',
    [id]
  );

module.exports = getProjectById;
