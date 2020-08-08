const { Router } = require('express');

const { slider } = require('../controller');

const router = Router();

router.get('/slider', slider.getSliders);
router.post('/slider', slider.addSlider);
router.put('/slider', slider.updateSlider);
router.delete('/slider/:id', slider.deleteSlider);

module.exports = router;
