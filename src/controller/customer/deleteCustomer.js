const { customer } = require('../../database/queries');
module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const {
      rows: [deletedCustomer],
    } = await customer.deleteCustomer(id);
    res.json({
      msg: 'customer deleted successfully',
      deletedCustomer,
    });
  } catch (e) {
    next(e);
  }
};
