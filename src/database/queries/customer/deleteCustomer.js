const connection = require('../../config/connection');

const deleteCustomer = id =>
  connection.query('DELETE FROM customer WHERE customer_id=$1 RETURNING *', [
    id,
  ]);

module.exports = deleteCustomer;
