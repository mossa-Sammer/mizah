const connection = require('../../config/connection');

const addFeature = ({ title, titleAr, description, descriptionAr }) =>
  connection.query(
    'INSERT INTO feature (title,title_ar,description,description_ar) VALUES ($1,$2,$3,$4) RETURNING *',
    [title, titleAr, description, descriptionAr]
  );

module.exports = addFeature;
