const { Safetycheck } = require('../../../models');
const moment = require('moment');
const sequelize = require('sequelize');
const Op = sequelize.Op;

exports.getprogress = async (req, res, next) => {
    let id_flag_mapping = new Map();
    let flag = 0;

    // 오늘
    let today = new Date();
    today.setHours(0, 0, 0, 0); // 시간/분/초/밀리초를 00:00:00:00 으로 지정

    // 오늘+1
    let tomorrow = new Date();
    tomorrow.setHours(0, 0, 0, 0);
    tomorrow.setDate(tomorrow.getDate() + 1);

    try {
        // 1명의 사회복지사가 오늘 방문 관리해야하는 safetycheck filtering
        const ex = await Safetycheck.findAll({ 
            where : { 
                socialworker_idsocialworker: req.user.idsocialworker, 
                service_idservice: 3,
                createdAt: {
                    [Op.gte]: today,
                    [Op.lt]: tomorrow
                  }
            },
        });

        // completed를 기준으로 나눈다.
        for ( var i = 0; i < ex.length; i++ ) {
            if ( ex[i].completed == false ) { // 오늘 아직 방문을 하지 않았다면
                flag = 0; // left에 display
            } else { 
                flag = 1; // right에 display
            }

            id_flag_mapping.set(ex[i].senior_idsenior, flag);
        }

        id_flag_mapping = Object.fromEntries(id_flag_mapping); // mapping 값 전달하기 위함

        return res.send({ id_flag_mapping : id_flag_mapping });
    } catch(error) {
        console.error(error);
        next(error);
    }
};