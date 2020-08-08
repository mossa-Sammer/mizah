const { services } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { rows } = await services.getServices();
    res.json(rows);
  } catch (e) {
    next(e);
  }
};
