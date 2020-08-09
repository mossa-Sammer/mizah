const { message } = require('../../database/queries');
module.exports = async (req, res, next) => {
  const { name, email, phoneNo, body } = req.body;
  try {
    const {
      rows: [addedMessage],
    } = await message.addMessage({
      name,
      email,
      phoneNo,
      body,
    });
    res.json({
      msg: 'message added successfully',
      addedMessage,
    });
  } catch (e) {
    next(e);
  }
};
