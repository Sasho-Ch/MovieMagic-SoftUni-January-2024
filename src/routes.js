const router = require('express').Router();
const homeController = require('./conrollers/homeController.js');
const movieController = require('./conrollers/movieController.js');
const castController = require('./conrollers/castController.js');
const authController = require('./conrollers/authController.js');

router.use(homeController);
router.use(movieController);
router.use('/cast' ,castController);
router.use('/auth' ,authController);

router.get('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;