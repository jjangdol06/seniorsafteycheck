const { Senior, Safetycheck, Socialworker } = require('../../../models')

exports.seniorlist = async (req, res) => {
    try {
        const seniorlist = await Senior.findAll({
            where: {
                socialworker_idsocialworker: req.user.id
            }
        })
        res.json({ seniorlist })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.seniordetail = async (req, res) => {
    const { idsenior } = req.body
    try {
        const seniordetail = await Senior.findAll({
            where: { idsenior }
        })
        res.json({ seniordetail })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.getsafetycheck = async () => {
    const { idsenior } = req.body
    try {
        const safetycheck = await Safetycheck.findAll({
            where: { senior_idsenior: idsenior }
        })
        res.json({ safetycheck })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.postsafetycheck = async () => {
    const { idsenior, service_idservice, senior_idsenior, socialworker_idsocialworker, completed, state_idstate } = req.body
    try {
        const safetycheck = await Safetycheck.create({
            idsenior,
            service_idservice,
            senior_idsenior,
            socialworker_idsocialworker,
            completed,
            state_idstate
        })
        res.json({ message: "safetycheck created" })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.daysafetycheck = async (req, res) => {
    // var senioridlist = []
    // var seniorname = []
    // var seniorphone = []

    try {
        // const senior = await Senior.findAll({
        //     where: { socialworker_idsocialworker: req.body.id },
        //     raw: true
        // }).then((result) => {
        //     for (var i = 0; i < result.length; i++){
        //         senioridlist.push(result[i].idsenior)
        //         seniorname.push(result[i].name)
        //         seniorphone.push(result[i].phone)
        //     }
        // })
        // console.log(senioridlist)
        const list = await Socialworker.findAll({
            where:{ idsocialworker: 1 }, //req.body.id
            include: [{
                model: Senior,
                attributes: ['name', 'phone'],
                through: {
                //   where: {completed: true}
                    // as: ['sc']
                }
              }],
            //   raw: true
        })
        res.json(list)
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}