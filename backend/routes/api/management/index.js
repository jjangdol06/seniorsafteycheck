const router = require('express').Router()
const controller = require('./management.controller')

// mainpage : piechart
router.get('/seniorlist', controller.seniorlist) 
router.get('/seniordetail/:idsenior', controller.seniordetail)
router.get('/safetycheck', controller.daysafetycheck)
router.get('/safetycheck/:idsenior', controller.getsafetycheck)
router.post('/safetycheck/:idsenior', controller.postsafetycheck)

module.exports = router