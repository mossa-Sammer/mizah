const connection = require('../../config/connection');

const deleteMessage = id =>
  connection.query('DELETE FROM message WHERE message_id=$1 RETURNING *', [id]);

module.exports = deleteMessage;
