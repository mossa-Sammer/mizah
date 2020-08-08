const connection = require('../../config/connection');

const deleteTestimonial = id =>
  connection.query(
    'DELETE FROM testimonial WHERE testimonial_id=$1 RETURNING *',
    [id]
  );

module.exports = deleteTestimonial;
