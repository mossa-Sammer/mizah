const connection = require('../../config/connection');

const deleteFeature = id =>
  connection.query('DELETE FROM feature WHERE feature_id=$1 RETURNING *', [id]);

module.exports = deleteFeature;
