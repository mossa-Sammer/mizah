const connection = require('../../config/connection');

const updateTestimonial = ({ id, name, nameAr, said, saidAr, imageUrl }) =>
  connection.query(
    'UPDATE testimonial SET name=$1, name_ar=$2, said=$3, said_ar=$4, image_url=$5 WHERE testimonial_id=$6 RETURNING *',
    [name, nameAr, said, saidAr, imageUrl, id]
  );

module.exports = updateTestimonial;
