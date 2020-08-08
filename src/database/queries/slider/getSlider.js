const connection = require('../../config/connection');

const getSliders = id =>
  connection.query('SELECT * FROM slider WHERE slider_id=$1', [id]);

module.exports = getSliders;
