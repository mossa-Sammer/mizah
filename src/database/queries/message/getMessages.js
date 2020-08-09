const connection = require('../../config/connection');

const getMessages = () => connection.query('SELECT * FROM message');

module.exports = getMessages;
