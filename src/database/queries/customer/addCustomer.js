const connection = require('../../config/connection');

const addCustomer = ({ name, nameAr, logoUrl }) =>
  connection.query(
    'INSERT INTO customer (name,name_ar,logo_url) VALUES ($1,$2,$3) RETURNING *',
    [name, nameAr, logoUrl]
  );

module.exports = addCustomer;
