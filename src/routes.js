const router = require('express').Router();
const homeController = require('./conrollers/homeController.js');
const movieController = require('./conrollers/movieController.js');
const castController = require('./conrollers/castController.js');

router.use(homeController);
router.use(movieController);
router.use('/cast' ,castController);

router.get('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;