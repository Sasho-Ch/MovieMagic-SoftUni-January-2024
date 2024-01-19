const router = require('express').Router();
const homeController = require('./conrollers/homeController.js');
const movieController = require('./conrollers/movieController.js');

router.use(homeController);
router.use(movieController);

router.get('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;