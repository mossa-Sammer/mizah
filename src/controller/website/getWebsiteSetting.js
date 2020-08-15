const { getWebSiteSetting } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const {
      rows: [websiteSetting],
    } = await getWebSiteSetting();
    res.json(websiteSetting);
  } catch (e) {
    next(e);
  }
};
