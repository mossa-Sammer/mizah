const connection = require('../../config/connection');

const addMessage = ({ name, email, phoneNo, body }) =>
  connection.query(
    'INSERT INTO message (name,email,phone_no,body) VALUES ($1,$2,$3,$4) RETURNING *',
    [name, email, phoneNo, body]
  );

module.exports = addMessage;
