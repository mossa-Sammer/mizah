const { blog } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { rows } = await blog.getBlogs();
    res.json(rows);
  } catch (e) {
    next(e);
  }
};
