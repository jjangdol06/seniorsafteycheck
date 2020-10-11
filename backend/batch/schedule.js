var cron = require('node-cron');
const { Socialworker, Senior, Safetycheck } = require("../models");

exports.completedIsZero = () => {
    cron.schedule('0 0 * * *', async () => { // 매일 0시마다 completed=0 생성

        // 모든 senior들의 safetycheck.completed=0으로 생성

    }).start();
}

exports.ARS1 = () => {
    cron.schedule('0 10 * * *', async () => { // 매일 10시마다 ARS 전화해서 응답결과를 random으로 생성해 받는것까지
        console.log("10시 ARS");

        try {
            const ex = await Senior.findAll(); // object 타입

            for (var i = 0; i < ex.length; i++) {
                console.log(ex[i].idsenior);
                const safetycheck = await Safetycheck.create({
                    service_idservice: 1, // 1. ARS
                    senior_idsenior: ex[i].idsenior,
                    socialworker_idsocialworker: ex[i].socialworker_idsocialworker,
                    completed: true,
                    description: "",
                    state_idstate: Math.floor(Math.random()*4 + 1), // 1~4 중 random으로 응답 결과 생성
                })
            }
        } catch (error) {
            console.log(error);
        }
    }).start();
}

exports.ARS2 = () => {
    cron.schedule('0 16 * * *', async () => { // 매일 16시마다 ARS 전화해서 응답결과를 랜덤으로 생성해 받는것까지
        console.log("16시 ARS");
        
        try {
            const ex = await Senior.findAll(); // object 타입

            for (var i = 0; i < ex.length; i++) {
                console.log(ex[i].idsenior);
                const safetycheck = await Safetycheck.create({
                    service_idservice: 1, // 1. ARS
                    senior_idsenior: ex[i].idsenior,
                    socialworker_idsocialworker: ex[i].socialworker_idsocialworker,
                    completed: true,
                    description: "",
                    state_idstate: Math.floor(Math.random()*4 + 1), // 1~4 중 random으로 응답 결과 생성
                })
            }
        } catch (error) {
            console.log(error);
        }
        
    }).start();
}