const { getAboutUs } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const {
      rows: [aboutUs],
    } = await getAboutUs();
    res.json(aboutUs);
  } catch (e) {
    next(e);
  }
};
