const router = require('express').Router()
const controller = require('./create-data.controller')

// 미리 약속해 놓은 데이터 create
router.post('/adminoffice', controller.adminoffice) // 3개의 adminoffice (1부터 시작)
router.get('/adminoffice', controller.getadminoffice) 
router.post('/state', controller.state) // 1: 긴급, 2: 일반, 3: 좋음, 4: 미정(default)
router.get('/state', controller.getstate)
router.post('/service', controller.service) // 1: ARS, 2: Direct (바로 전화) 3: 방문
router.get('/service', controller.getservice)
router.post('/detail', controller.detail) // 1: 당뇨 2: 고혈압 3: 치매 4: 청각장애 5: 시각장애 6: 거동불편
router.get('/detail', controller.getdetail)

// // DB create api
router.post('/socialworker', controller.socialworker) // 사회 복지사
router.get('/socialworker', controller.getsocialworker)
router.post('/senior', controller.senior) // 노인
router.get('/senior', controller.getsenior)
router.post('/family', controller.family) // 노인의 부양 가족  relation 1: 자식 2: 친척 3: 기타
router.get('/family', controller.getfamily)
router.post('/senior-has-detail', controller.senior_has_detail) // 각 노인이 가지고 있는 질병들
router.get('/senior-has-detail', controller.getsenior_has_detail)
router.post('/safetycheck', controller.safetycheck) // ARS, Direct, 방문에 대한 check
router.get('/safetycheck', controller.getsafetycheck)

module.exports = router
