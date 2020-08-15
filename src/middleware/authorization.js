const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    await jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (e) {
    res.status(401).json({ msg: 'unauthorized' });
  }
};
