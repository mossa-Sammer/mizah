const { feature } = require('../../database/queries');
module.exports = async (req, res, next) => {
  try {
    const { rows } = await feature.getFetures();
    res.json(rows);
  } catch (e) {
    next(e);
  }
};
