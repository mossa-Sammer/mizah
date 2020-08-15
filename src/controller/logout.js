module.exports = (req, res, next) => {
  res.clearCookie('token');
  res.json({ msg: 'logged out successfully' });
};
