const connection = require('../../config/connection');

const deleteBlog = id =>
  connection.query('DELETE FROM blog WHERE blog_id=$1 RETURNING *', [id]);

module.exports = deleteBlog;
