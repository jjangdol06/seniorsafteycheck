const router = require('express').Router()
const controller = require('./management.controller')

// mainpage : piechart
router.get('/management/seniorlist', controller.seniorlist) 
router.get('/management/seniordetail/:idsenior', controller.seniordetail)
router.get('/management/safetycheck/:idsenior', controller.getsafetycheck)
router.post('/management/safetycheck/:idsenior', controller.postsafetycheck)

module.exports = router