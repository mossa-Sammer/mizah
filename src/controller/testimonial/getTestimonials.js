const { testimonial } = require('../../database/queries');
module.exports = async (req, res, next) => {
  try {
    const { rows } = await testimonial.getTestimonials();
    res.json(rows);
  } catch (e) {
    next(e);
  }
};
