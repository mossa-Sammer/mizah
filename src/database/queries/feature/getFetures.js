const connection = require('../../config/connection');

const getFeatures = () => connection.query('SELECT * FROM feature');

module.exports = getFeatures;
