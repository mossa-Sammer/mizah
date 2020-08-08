const connection = require('../../config/connection');

const updateCustomer = ({ id, name, nameAr, logoUrl }) =>
  connection.query(
    'UPDATE customer SET name=$1,name_ar=$2,logo_url=$3 WHERE customer_id=$4 RETURNING *',
    [name, nameAr, logoUrl, id]
  );

module.exports = updateCustomer;
