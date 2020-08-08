const connection = require('../../config/connection');

const getSliders = () => connection.query('SELECT * FROM slider');

module.exports = getSliders;