const connection = require('../../config/connection');

const getBlogs = () => connection.query('SELECT * FROM blog');

module.exports = getBlogs;
