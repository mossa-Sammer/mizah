const { blog } = require('../../database/queries');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const {
      rows: [deletedBlog],
    } = await blog.deleteBlog(id);
    res.json({
      msg: 'deleted blog successfully',
      deletedBlog,
    });
  } catch (e) {
    next(e);
  }
};
