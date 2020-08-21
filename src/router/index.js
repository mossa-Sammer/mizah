const { Router } = require('express');

const {
  slider,
  services,
  testimonial,
  project,
  customer,
  feature,
  blog,
  message,
  login,
  logout,
  website,
  images,
} = require('../controller');

const { isAuthed } = require('../middleware');

const router = Router();

router.get('/slider', slider.getSliders);
router.get('/service', services.getServices);
router.get('/testimonial', testimonial.getTestimonials);
router.get('/project', project.getProjects);
router.get('/project/:id', project.getProject);
router.get('/customer', customer.getCustomers);
router.get('/feature', feature.getFeatures);
router.get('/blog', blog.getBlogs);
router.post('/message', message.addMessage);
router.post('/login', login);
router.post('/logout', logout);
// router.use(isAuthed);

router.post('/upload', images.addImage);
router.delete('/upload', images.deleteImage);

router.post('/slider', slider.addSlider);
router.put('/slider', slider.updateSlider);
router.delete('/slider/:id', slider.deleteSlider);

router.post('/service', services.addService);
router.put('/service', services.updateService);
router.delete('/service/:id', services.deleteService);

router.post('/testimonial', testimonial.addTestimonial);
router.put('/testimonial', testimonial.updateTestimonial);
router.delete('/testimonial/:id', testimonial.deleteTestimonial);

router.post('/project', project.addProject);
router.put('/project', project.updateProject);
router.delete('/project/:id', project.deleteProject);

router.post('/customer', customer.addCustomer);
router.put('/customer', customer.updateCustomer);
router.delete('/customer/:id', customer.deleteCustomer);

router.post('/feature', feature.addFeature);
router.put('/feature', feature.updateFeature);
router.delete('/feature/:id', feature.deleteFeature);

router.post('/blog', blog.addBlog);
router.put('/blog', blog.updateBlog);
router.delete('/blog/:id', blog.deleteBlog);

router.get('/message', message.getMessages);
router.put('/message', message.updateMessage);
router.delete('/message/:id', message.deleteMessage);

router.get('/aboutus', website.getAboutUs);
router.put('/aboutus', website.editAboutUs);

router.get('/setting', website.getWebsiteSetting);
router.put('/setting', website.editSetting);

module.exports = router;
