const express = require('express');
const {getMainPage} = require('../controllers/main-controller');

const router = express.Router();

router.get('/', getMainPage);
router.get('/home', getMainPage);
router.get('/index', getMainPage);

module.exports = router;