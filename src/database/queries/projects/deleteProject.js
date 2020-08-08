const connection = require('../../config/connection');

const deleteProject = id =>
  connection.query('DELETE FROM project WHERE project_id=$1', [id]);

module.exports = deleteProject;
