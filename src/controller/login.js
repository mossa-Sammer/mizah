const jwt = require('jsonwebtoken');
const { findUserByEmail } = require('../database/queries');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const {
      rows: [user],
    } = await findUserByEmail(email);
    if (!user) {
      res.status(404).json({ error: 'user not found' });
    }
    if (user.password !== password) {
      res.status(403).json({ error: 'incorrect password' });
    }
    const token = await jwt.sign(
      {
        user,
      },
      process.env.JWT_SECRET
    );
    res.cookie('token', token);
    res.json({ msg: 'logged in successfully', email });
  } catch (e) {
    next(e);
  }
};
