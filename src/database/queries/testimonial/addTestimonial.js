const connection = require('../../config/connection');

const addTestimonial = ({ name, nameAr, said, saidAr, imageUrl }) =>
  connection.query(
    'INSERT INTO testimonial (name, name_ar, said, said_ar, image_url) VALUES ($1,$2,$3,$4,$5) RETURNING *',
    [name, nameAr, said, saidAr, imageUrl]
  );

module.exports = addTestimonial;
