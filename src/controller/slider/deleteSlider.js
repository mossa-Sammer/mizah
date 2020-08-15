const { deleteSlider } = require('../../database/queries/slider');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const {
      rows: [deletedSlider],
    } = await deleteSlider(id);
    res.json({ msg: 'slider deleted successfully', deletedSlider });
  } catch (e) {
    next(e);
  }
};
