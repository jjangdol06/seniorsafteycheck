const router = require('express').Router()
const controller = require('./user.controller')
const { isLoggedIn } = require('../middlewares');

router.get('/', isLoggedIn, controller.mypage);

module.exports = router