const { message } = require('../../database/queries');
module.exports = async (req, res, next) => {
  const { id, name, email, phoneNo, body } = req.body;
  try {
    const {
      rows: [updatedMessage],
    } = await message.updateMessage({
      id,
      name,
      email,
      phoneNo,
      body,
    });
    res.json({
      msg: 'message updated successfully',
      updatedMessage,
    });
  } catch (e) {
    next(e);
  }
};
