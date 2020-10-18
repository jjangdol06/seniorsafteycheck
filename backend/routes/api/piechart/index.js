const router = require('express').Router()
const controller = require('./piechart.controller')

// mainpage : piechart
router.get('/', controller.daypiechart) 
router.get('/week', controller.weekpiechart)

module.exports = router
