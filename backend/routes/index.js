const router = require('express').Router()
// const uuidv4 = require('uuid/v4')

const createdata = require('./api/create-data/index')
const auth = require('./api/auth/index')
const user = require('./api/user/index')

router.use('/create-data', createdata)
router.use('/', auth) // 회원가입, 로그인, 로그아웃
router.use('/mypage', user) // 마이페이지

module.exports = router
