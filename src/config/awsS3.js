const AWS = require('aws-sdk');

const bucket = 'mizha-bucket';
const region = 'eu-west-3';
const storageUrl = `https://${bucket}.s3.${region}.amazonaws.com`;

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region,
});

module.exports = { s3, bucket, storageUrl };
