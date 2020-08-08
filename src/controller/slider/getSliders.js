const { getSliders } = require('../../database/queries/slider');

module.exports = async (req, res, next) => {
  try {
    const { rows } = await getSliders();
    res.json(rows);
  } catch (e) {
    next(e);
  }
};
