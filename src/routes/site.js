const express = require('express');
const newscontroller = require('../controller/NewsController');
const router = express.Router();

const siteController = require('../controller/SiteController');

//newsController.index
router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
