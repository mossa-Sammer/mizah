const { message } = require('../../database/queries');
module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const {
      rows: [deletedMessage],
    } = await message.deleteMessage(id);
    res.json({
      msg: 'message deleted successfully',
      deletedMessage,
    });
  } catch (e) {
    next(e);
  }
};
