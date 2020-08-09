const { feature } = require('../../database/queries');
module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const {
      rows: [deletedFeature],
    } = await feature.deleteFeature(id);
    res.json({
      msg: 'feature deleted successfully',
      deletedFeature,
    });
  } catch (e) {
    next(e);
  }
};
