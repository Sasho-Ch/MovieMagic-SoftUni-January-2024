const router = require('express').Router();
const homeController = require('./conrollers/homeController.js');
const movieController = require('./conrollers/movieController.js');

router.use(homeController);
router.use(movieController);

module.exports = router;