const { customer } = require('../../database/queries');
module.exports = async (req, res, next) => {
  const { name, nameAr, logoUrl } = req.body;
  try {
    const {
      rows: [addedCustomer],
    } = await customer.addCustomer({
      name,
      nameAr,
      logoUrl,
    });
    res.json({
      msg: 'customer added successfully',
      addedCustomer,
    });
  } catch (e) {
    next(e);
  }
};
