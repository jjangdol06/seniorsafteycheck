const router = require('express').Router()
const controller = require('./create-data.controller')

router.post('/socialworker', controller.socialworker) // 전체 크루 목록

module.exports = router
