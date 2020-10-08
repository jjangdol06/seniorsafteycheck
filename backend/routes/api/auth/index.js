const router = require('express').Router()
const controller = require('./auth.controller')
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');


// sy: Not Found 보기 싫어서 임시로 해놨습니다.
router.get('/', function(req, res) {
    res.send('Home Page');
});

router.post('/signup', isNotLoggedIn, controller.signup);
router.post('/login', isNotLoggedIn, controller.login);
router.get('/logout', isLoggedIn, controller.logout);

module.exports = router