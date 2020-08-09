const { s3, storageUrl, bucket } = require('../../config/awsS3');

module.exports = async (req, res, next) => {
  const { imageUrl } = req.body;
  try {
    await s3.deleteObject({ Bucket: bucket, Key: imageUrl }, (err, data) => {
      if (err) throw err;
      else
        res.json({
          msg: 'deleted object from s3 successfully',
        });
    });
  } catch (e) {
    next(e);
  }
};
