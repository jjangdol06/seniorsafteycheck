const router = require('express').Router()
const controller = require('./create-data.controller')

router.post('/socialworker', controller.socialworker)

module.exports = router
