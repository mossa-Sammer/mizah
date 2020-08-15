const connection = require('../../config/connection');

const deleteSlider = id =>
  connection.query('DELETE FROM slider WHERE slider_id=$1', [id]);

module.exports = deleteSlider;
