const router = require('express').Router()
const controller = require('./manage-progress.controller')
const { isLoggedIn } = require('../middlewares');

router.get('/', isLoggedIn, controller.getprogress); // 관리 진행 현황 

module.exports = router