const slider = require('./slider');
const services = require('./services');
const testimonial = require('./testimonial');
const project = require('./projects');
const customer = require('./customer');
const feature = require('./feature');
const blog = require('./blog');
const message = require('./message');
const findUserByEmail = require('./findUserByEmail');
const {
  editAboutUs,
  editWebSiteSetting,
  getAboutUs,
  getWebSiteSetting,
} = require('./webSiteSetting');

module.exports = {
  slider,
  services,
  testimonial,
  project,
  customer,
  feature,
  blog,
  message,
  findUserByEmail,
  editAboutUs,
  editWebSiteSetting,
  getAboutUs,
  getWebSiteSetting,
};
