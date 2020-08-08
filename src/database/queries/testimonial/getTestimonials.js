const connection = require('../../config/connection');

const getTestimonials = () => connection.query('SELECT * FROM testimonial');

module.exports = getTestimonials;
