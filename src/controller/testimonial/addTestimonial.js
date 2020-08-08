const { testimonial } = require('../../database/queries');
module.exports = async (req, res, next) => {
  const { name, nameAr, said, saidAr, imageUrl } = req.body;
  try {
    const {
      rows: [addedTestimonial],
    } = await testimonial.addTestimonial({
      name,
      nameAr,
      said,
      saidAr,
      imageUrl,
    });
    res.json({
      msg: 'testimonial added successfully',
      addedTestimonial,
    });
  } catch (e) {
    next(e);
  }
};
