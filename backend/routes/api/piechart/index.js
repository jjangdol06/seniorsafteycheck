const router = require('express').Router()
const controller = require('./piechart.controller')
const { isLoggedIn } = require('../middlewares');

// mainpage : piechart
router.get('/', isLoggedIn, controller.piechart)

module.exports = router
