const { customer } = require('../../database/queries');
module.exports = async (req, res, next) => {
  try {
    const { rows } = await customer.getCustomers();
    res.json(rows);
  } catch (e) {
    next(e);
  }
};
