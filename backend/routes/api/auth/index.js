const router = require('express').Router()
const controller = require('./auth.controller')
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');


// sy: Not Found 보기 싫어서 임시로 해놨습니다.
router.get('/', function(req, res) {
    res.send('Home Page');
});

router.post('/signup', isNotLoggedIn, controller.signup); // 회원가입
router.post('/login', isNotLoggedIn, controller.login); // 로그인
router.get('/logout', isLoggedIn, controller.logout); // 로그아웃

module.exports = router