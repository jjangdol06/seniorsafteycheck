const router = require('express').Router()
const controller = require('./management.controller')

// mainpage : piechart
router.get('/seniorlist', controller.seniorlist) 
router.get('/seniordetail/:idsenior', controller.seniordetail)
router.get('/safetycheck', controller.daysafetycheck) // 이미 썼어
router.get('/safetylist', controller.getsafetycheck) // personal info 에서 사용되는 api
router.post('/safetycheck/:idsenior', controller.postsafetycheck)

module.exports = router