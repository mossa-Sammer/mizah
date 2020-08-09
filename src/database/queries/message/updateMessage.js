const connection = require('../../config/connection');

const updateMessage = ({ id, name, email, phoneNo, body }) => {
  console.log(id, name, email, phoneNo, body);
  return connection.query(
    'UPDATE message SET name=$1,email=$2,phone_no=$3,body=$4 WHERE message_id=$5 RETURNING *',
    [name, email, phoneNo, body, id]
  );
};

module.exports = updateMessage;
