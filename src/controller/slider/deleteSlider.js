const { deleteSlider } = require('../../database/queries/slider');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const {
    rows: [deletedSlider],
  } = await deleteSlider(id);
  try {
    res.json({ msg: 'slider deleted successfully', deletedSlider });
  } catch (e) {
    next(e);
  }
};
