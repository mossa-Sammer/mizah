const { blog } = require('../../database/queries');

module.exports = async (req, res, next) => {
  const { title, titleAr, description, descriptionAr, imageUrl } = req.body;

  try {
    const {
      rows: [addedBlog],
    } = await blog.addBlog({
      title,
      titleAr,
      description,
      descriptionAr,
      imageUrl,
    });
    res.json({
      msg: 'blog added successfully',
      addedBlog,
    });
  } catch (e) {
    next(e);
  }
};
