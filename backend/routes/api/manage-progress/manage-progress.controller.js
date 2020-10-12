const { Safetycheck } = require('../../../models');
const moment = require('moment');
const sequelize = require('sequelize');
const Op = sequelize.Op;

exports.getprogress = async (req, res, next) => {
    let name_flag_mapping = new Map();
    let flag = 0;

    let today = moment(new Date()).format('YYYY-MM-DD'); // 오늘 날짜 '2020-10-12'으로 표현

    try {
        // const ex = await Safetycheck.findAll({ where : { socialworker_idsocialworker: req.user.idsocialworker, createdAt: {
        //     like: "%" + today + "%" } } });

        // const ex = await Safetycheck.findAll({ where : { socialworker_idsocialworker: req.user.idsocialworker, createdAt: {
        //     lt: new Date() } } });

        const ex = await Safetycheck.findAll({ where : { socialworker_idsocialworker: req.user.idsocialworker } }); // TODO: Date filtering
        // 1명의 사회복지사가 오늘 관리해야하는 safetycheck

        console.log('ex.length:'+ex.length);

        // 1명의 사회복지사가 관리하는 senior 대상으로
        for ( var i = 0; i < ex.length; i++ ) {
            if ( ex[i].service_idservice == 1 && ex[i].completed == true ) { // 오늘 아직 방문을 하지 않았다면
                flag = 0; // left에 display
            } else { 
                flag = 1; // right에 display
            }

            name_flag_mapping.set(ex[i].senior_idsenior, flag);
        }

        // test
        for (let key of name_flag_mapping.keys()) {
            console.log(key);
        }

        return res.send({ name_flag_mapping : name_flag_mapping }); // TODO: 전달 값 변경
    } catch(error) {
        console.error(error);
        next(error);
    }
};