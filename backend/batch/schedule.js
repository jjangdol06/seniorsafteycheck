var cron = require('node-cron');
const { Socialworker, Senior, Safetycheck } = require("../models");
const sequelize = require('sequelize');
const Op = sequelize.Op;

exports.ARS1 = () => {
    cron.schedule('0 10 * * *', async () => { // 매일 10시마다 ARS 전화해서 응답결과를 random으로 생성해 받는것까지
        try {
            const ex = await Senior.findAll(); // object 타입

            for (var i = 0; i < ex.length; i++) {

                console.log(ex[i].idsenior);

                const state = Math.floor(Math.random()*4 + 1); // state 1~4 중 random으로 응답 결과 생성
                let completed = false;

                if (state == 4) { // state가 4(무응답)이면 completed = false;
                    completed = false;
                } else {
                    completed = true;
                }

                const safetycheck = await Safetycheck.create({
                    service_idservice: 1, // 1. ARS
                    senior_idsenior: ex[i].idsenior,
                    socialworker_idsocialworker: ex[i].socialworker_idsocialworker,
                    completed: completed,
                    description: "",
                    state_idstate: state, 
                })
            }
        } catch (error) {
            console.log(error);
        }
    }).start();
}

exports.ARS2 = () => {
    cron.schedule('0 16 * * *', async () => { // 매일 16시마다 ARS 전화해서 응답결과를 랜덤으로 생성해 받는것까지
        try {
            const ex = await Senior.findAll(); // object 타입

            for (var i = 0; i < ex.length; i++) {
                
                console.log(ex[i].idsenior);

                const state = Math.floor(Math.random()*4 + 1); // state 1~4 중 random으로 응답 결과 생성
                let completed = false;

                if (state == 4) { // state가 4(무응답)이면 completed = false;
                    completed = false;
                } else {
                    completed = true;
                }

                const safetycheck = await Safetycheck.create({
                    service_idservice: 1, // 1. ARS
                    senior_idsenior: ex[i].idsenior,
                    socialworker_idsocialworker: ex[i].socialworker_idsocialworker,
                    completed: completed,
                    description: "",
                    state_idstate: state, 
                })
            }
        } catch (error) {
            console.log(error);
        }
        
    }).start();
}

exports.CALL = () => {
    cron.schedule('0 17 * * *', async () => { // 매일 17시마다 ARS 2번 모두 completed == 0 이면 직접 전화

        // 오늘
        let today = new Date();
        today.setHours(0, 0, 0, 0); // 시간/분/초/밀리초를 00:00:00:00 으로 지정

        // 내일(오늘+1)
        let tomorrow = new Date();
        tomorrow.setHours(0, 0, 0, 0);
        tomorrow.setDate(tomorrow.getDate() + 1);

        try {
            // ARS completed == 0 safetycheck filtering
            // select senior_idsenior, count(*) from safetycheck where service_idservice=1 and completed=false group by senior_idsenior;
            const ARS_completed_zero = await Safetycheck.findAll({ 
                attributes: ['senior_idsenior', [sequelize.fn('count', '*'), 'count']],
                where: { 
                    service_idservice: 1,
                    completed: false, // completed == 0
                    createdAt: {
                        [Op.gte]: today,
                        [Op.lt]: tomorrow
                    }
                },
                group: 'senior_idsenior',
            });

            // ARS 2번 모두 completed == 0 인 경우 전화
            for (var i = 0; i < ARS_completed_zero.length; i++) {

                if (ARS_completed_zero[i].get('count') == 2) {
                    const ex = await Senior.findOne({ 
                        where : { 
                            idsenior: ARS_completed_zero[i].senior_idsenior
                        },
                    });

                    const state = Math.floor(Math.random()*4 + 1); // state 1~4 중 random으로 응답 결과 생성
                    let completed = false;

                    if (state == 4) { // state가 4(무응답)이면 completed = false;
                        completed = false;
                    } else {
                        completed = true;
                    }

                    const safetycheck = await Safetycheck.create({
                        service_idservice: 2, // 2. 전화
                        senior_idsenior: ex.idsenior,
                        socialworker_idsocialworker: ex.socialworker_idsocialworker,
                        completed: completed,
                        description: "",
                        state_idstate: state, 
                    })
                }
            }
        } catch (error) {
            console.log(error);
        }

    }).start();
}

exports.VISIT = () => {
    cron.schedule('0 0 * * *', async () => { // 매일 12시마다 3일 동안 completed == 0일 경우 방문
        
        // 3일 전(오늘-3)
        let three_days_before = new Date();
        three_days_before.setHours(0, 0, 0, 0);
        three_days_before.setDate(three_days_before.getDate() - 3);

        // 오늘
        let today = new Date();
        today.setHours(0, 0, 0, 0); // 시간/분/초/밀리초를 00:00:00:00 으로 지정

        try {
            // 3일 동안 ARS, 전화, 방문 completed == 0 safetycheck filtering
            // select senior_idsenior, count(*) from safetycheck where completed=false group by senior_idsenior;
            const ALL_completed_zero = await Safetycheck.findAll({ 
                attributes: ['senior_idsenior', [sequelize.fn('count', '*'), 'count']],
                where: { 
                    completed: false, // completed == 0
                    createdAt: {
                        [Op.gte]: three_days_before,
                        [Op.lt]: today
                    }
                },
                group: 'senior_idsenior',
            });

            // 3일 동안 completed == 0이 9번 이상인 경우 방문해야함을 알림
            for (var i = 0; i < ALL_completed_zero.length; i++) {

                if (ALL_completed_zero[i].get('count') >= 9) {

                    const ex = await Senior.findOne({ 
                        where : { 
                            idsenior: ALL_completed_zero[i].senior_idsenior
                        },
                    });

                    const safetycheck = await Safetycheck.create({
                        service_idservice: 3, // 3. 방문
                        senior_idsenior: ex.idsenior,
                        socialworker_idsocialworker: ex.socialworker_idsocialworker,
                        completed: false, // 방문 해야함
                        description: "",
                        state_idstate: 4, 
                    })
                }
            }
        } catch (error) {
            console.log(error);
        }

    }).start();
}