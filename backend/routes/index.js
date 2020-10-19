const router = require('express').Router()
// const uuidv4 = require('uuid/v4')

const createdata = require('./api/create-data/index')
const auth = require('./api/auth/index')
const user = require('./api/user/index')
const piechart = require('./api/piechart/index')
const management = require('./api/management/index')

router.use('/create-data', createdata) // 데이터 생성 관련 api
router.use('/', auth) // 회원가입, 로그인, 로그아웃
router.use('/mypage', user) // 마이페이지
router.use('/piechart', piechart) // jy: 메인페이지 파이차트
router.use('/management', management) // jy : 운영 관리 페이지

module.exports = router
