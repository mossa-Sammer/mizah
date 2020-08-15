const connection = require('../config/connection');

const findUserByEmail = email =>
  connection.query('SELECT * FROM "user" WHERE email=$1 ', [email]);

module.exports = findUserByEmail;
