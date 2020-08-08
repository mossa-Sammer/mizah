const { testimonial } = require('../../database/queries');
module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const {
      rows: [deletedTestimonial],
    } = await testimonial.deleteTestimonial(id);
    res.json({
      msg: 'testimonial deleted successfully',
      deletedTestimonial,
    });
  } catch (e) {
    next(e);
  }
};
