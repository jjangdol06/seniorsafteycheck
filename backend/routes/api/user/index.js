const router = require('express').Router()
const controller = require('./user.controller')
const { isLoggedIn } = require('../middlewares');

router.get('/', isLoggedIn, controller.mypage); // 마이페이지

module.exports = router