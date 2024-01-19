const router = require('express').Router();
const homeController = require('./conrollers/homeController.js');

router.use(homeController);

module.exports = router;