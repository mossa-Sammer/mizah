const { blog } = require('../../database/queries');

module.exports = async (req, res, next) => {
  const { id, title, titleAr, description, descriptionAr, imageUrl } = req.body;

  try {
    const {
      rows: [updatedBlog],
    } = await blog.updateBlog({
      id,
      title,
      titleAr,
      description,
      descriptionAr,
      imageUrl,
    });
    res.json({
      msg: 'blog updated successfully',
      updatedBlog,
    });
  } catch (e) {
    next(e);
  }
};
