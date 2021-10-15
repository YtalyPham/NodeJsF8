const express = require('express');
const newscontroller = require('../controller/NewsController');
const router = express.Router();

const newsController = require('../controller/NewsController');

//newsController.index
router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;
