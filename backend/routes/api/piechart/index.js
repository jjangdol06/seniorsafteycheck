const router = require('express').Router()
const controller = require('./piechart.controller')

// mainpage : piechart
router.get('/', controller.piechart)

module.exports = router
