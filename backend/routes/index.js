const router = require('express').Router()
// const uuidv4 = require('uuid/v4')
const createdata = require('./api/create-data/index')

router.use('/create-data', createdata)

module.exports = router
