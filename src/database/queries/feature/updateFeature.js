const connection = require('../../config/connection');

const updateFeature = ({ id, title, titleAr, description, descriptionAr }) =>
  connection.query(
    'UPDATE feature SET title=$1,title_ar=$2,description=$3,description_ar=$4 WHERE feature_id=$5 RETURNING *',
    [title, titleAr, description, descriptionAr, id]
  );

module.exports = updateFeature;
