const { Router } = require('express');

const {
  slider,
  services,
  testimonial,
  project,
  customer,
} = require('../controller');
const router = Router();

router.get('/slider', slider.getSliders);
router.post('/slider', slider.addSlider);
router.put('/slider', slider.updateSlider);
router.delete('/slider/:id', slider.deleteSlider);

router.get('/service', services.getServices);
router.post('/service', services.addService);
router.put('/service', services.updateService);
router.delete('/service/:id', services.deleteService);

router.get('/testimonial', testimonial.getTestimonials);
router.post('/testimonial', testimonial.addTestimonial);
router.put('/testimonial', testimonial.updateTestimonial);
router.delete('/testimonial/:id', testimonial.deleteTestimonial);

router.get('/project', project.getProjects);
router.post('/project', project.addProject);
router.put('/project', project.updateProject);
router.delete('/project/:id', project.deleteProject);

router.get('/customer', customer.getCustomers);
router.post('/customer', customer.addCustomer);
router.put('/customer', customer.updateCustomer);
router.delete('/customer/:id', customer.deleteCustomer);

module.exports = router;
