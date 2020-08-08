const connection = require('../../config/connection');

const getCustomers = () => connection.query('SELECT * FROM customer');

module.exports = getCustomers;
