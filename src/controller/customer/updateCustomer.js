const { customer } = require('../../database/queries');
module.exports = async (req, res, next) => {
  const { id, name, nameAr, logoUrl } = req.body;
  try {
    const {
      rows: [updatedCustomer],
    } = await customer.updateCustomer({
      id,
      name,
      nameAr,
      logoUrl,
    });
    res.json({
      msg: 'customer updated successfully',
      updatedCustomer,
    });
  } catch (e) {
    next(e);
  }
};
