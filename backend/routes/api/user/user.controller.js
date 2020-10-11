const { Socialworker } = require('../../../models');

exports.getmypage = async (req, res, next) => {
    try {
        const exSocialworker = await Socialworker.findOne({ where: { id: req.user.id } });
        res.send({ socialworker: exSocialworker }); // 로그인 한 socialworker의 정보 전달
    } catch(error) {
        console.error(error);
        next(error);
    }
};