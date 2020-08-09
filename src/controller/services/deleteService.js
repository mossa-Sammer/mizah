const { deleteService } = require('../../database/queries/services');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const {
    rows: [deletedService],
  } = await deleteService(id);
  try {
    res.json({ msg: 'slider deleted successfully', deletedService });
  } catch (e) {
    next(e);
  }
};
