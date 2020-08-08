const connection = require('../../config/connection');

const getServices = () => connection.query('SELECT * FROM service');

module.exports = getServices;
