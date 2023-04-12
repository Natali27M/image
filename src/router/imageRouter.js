const { Router } = require('express');
const {imageController} = require('../controller');

const router = Router();

router.post('/image', imageController.getImageUrl);

module.exports = router;

