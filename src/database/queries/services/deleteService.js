const connection = require('../../config/connection');

const deleteService = id =>
  connection.query('DELETE FROM service WHERE service_id=$1 RETURNING *', [id]);

module.exports = deleteService;
