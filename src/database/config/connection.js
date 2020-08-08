const { Pool } = require('pg');

let dbURL = '';

if (process.env.NODE_ENV === 'production') {
  dbURL = '';
} else if (process.env.NODE_ENV === 'test') {
  dbURL = '';
} else {
  dbURL = '';
}

module.exports = new Pool({ connectionString: dbURL });
