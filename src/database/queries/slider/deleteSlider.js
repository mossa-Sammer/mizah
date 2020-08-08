const connection = require('../../config/connection');

const deleteSlider = id =>
  connection.query('DELETE  slider WHERE slider_id=$1', [id]);

module.exports = deleteSlider;
