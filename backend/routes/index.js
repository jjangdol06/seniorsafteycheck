const router = require('express').Router()
// const uuidv4 = require('uuid/v4')

const createdata = require('./api/create-data/index')
const auth = require('./api/auth/index')

router.use('/create-data', createdata)
router.use('/', auth) // 회원가입, 로그인, 로그아웃

module.exports = router
