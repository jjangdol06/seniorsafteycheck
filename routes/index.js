const router = require('express').Router()
const uuidv4 = require('uuid/v4')
const auth = require('./api/auth/index')

router.use('/auth', auth)

module.exports = router
