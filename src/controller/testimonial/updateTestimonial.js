const { testimonial } = require('../../database/queries');
module.exports = async (req, res, next) => {
  const { id, name, nameAr, said, saidAr, imageUrl } = req.body;
  try {
    const {
      rows: [updatedTestimonial],
    } = await testimonial.updateTestimonial({
      id,
      name,
      nameAr,
      said,
      saidAr,
      imageUrl,
    });
    res.json({
      msg: 'testimonial updated successfully',
      updatedTestimonial,
    });
  } catch (e) {
    next(e);
  }
};
