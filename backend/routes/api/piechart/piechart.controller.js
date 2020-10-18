const { Safetycheck, Senior, Socialworker, State } = require('../../../models')
const env = process.env.NODE_ENV || 'development';
const config = require('../../../config/config.json')[env];
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    config.database, config.username, config.password, config
    );
const Op = Sequelize.Op;

/*
req : type(쿼리 기간?), req.user.id
res : 각 state별 count 총 인원 수 

social worker 가 관리하는 모든 노인의 숫자 count
미분류/0/1/2/3  count 하기 (집계함수?)
*/
exports.daypiechart = async (req, res) => {
    const { type } = req.body
    try {
        const safetycheck = await Safetycheck.findAll({
            attributes: ['state_idstate', sequelize.fn('count', sequelize.col('senior_idsenior'))],
            group: ["state_idstate"],
            where: {
                socialworker_idsocialworker: 3,
                // createdAt: sequelize.fn('currdate') }
                createdAt: { [Op.between]: ["2020-10-08T14:06:48.000Z", "2021-10-14T22:33:54.000Z"] }
            }
        }).then(function (result) {
            console.log(result)
            res.json({ result })
         });
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.weekpiechart = async () => {

}