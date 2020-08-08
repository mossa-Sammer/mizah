const { Router } = require('express');

const { slider, services } = require('../controller');
const router = Router();

router.get('/slider', slider.getSliders);
router.post('/slider', slider.addSlider);
router.put('/slider', slider.updateSlider);
router.delete('/slider/:id', slider.deleteSlider);

router.get('/service', services.getServices);
router.post('/service', services.addService);
router.put('/service', services.updateService);
router.delete('/service/:id', services.deleteService);

module.exports = router;
