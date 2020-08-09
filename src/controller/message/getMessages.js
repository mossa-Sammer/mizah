const { message } = require('../../database/queries');
module.exports = async (req, res, next) => {
  try {
    const { rows } = await message.getMessages();
    res.json(rows);
  } catch (e) {
    next(e);
  }
};
