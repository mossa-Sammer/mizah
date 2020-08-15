const { v4: uuid } = require('uuid');
const { s3, storageUrl, bucket } = require('../../config/awsS3');

module.exports = async (req, res, next) => {
  const { type } = req.body;
  const imageKey = uuid();
  try {
    const uploadURL = await s3.getSignedUrlPromise('putObject', {
      Bucket: bucket,
      ContentType: type,
      Key: imageKey,
    });
    res.json({
      uploadURL,
      imageUrl: `${storageUrl}/${imageKey}`,
    });
  } catch (e) {
    next(e);
  }
};
