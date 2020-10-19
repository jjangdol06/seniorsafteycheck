const { Adminoffice, Detail, Family, Safetycheck, Senior_has_detail, Senior, Service, Socialworker, State } = require('../../../models')

exports.adminoffice = async (req, res) => {
    const { address, phone } = req.body
    try {
        const ex = await Adminoffice.findOne({ where: { address } })
        if (ex) {
            throw new Error('adminoffice exists')
        }
        const adminoffice = await Adminoffice.create({
            address: address,
            phone: phone
        })
        res.json({ message: "adminoffice created" })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.getadminoffice = async (req, res) => {
    try {
        const adminoffice = await Adminoffice.findAll()
        res.json({
            adminoffice,
        })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.detail = async (req, res) => {
    const { detailname, risk } = req.body
    try {
        const ex = await Detail.findOne({ where: { detailname } })
        if (ex) {
            throw new Error('detail exists')
        }
        const detail = await Detail.create({
            detailname: detailname,
            risk: risk,
        })
        res.json({ message: "detail created" })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.getdetail = async (req, res) => {
    try {
        const detail = await Detail.findAll()
        res.json({
            detail,
        })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.family = async (req, res) => {
    const { address, relation, phone, idsenior, name } = req.body
    try {
        const ex = await Family.findOne({ where: { phone } })
        if (ex) {
            throw new Error('family exists')
        }
        const family = await Family.create({
            address: address,
            relation: relation,
            phone: phone,
            senior_idsenior: idsenior,
            name: name,
        })
        res.json({ message: "family created" })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.getfamily = async (req, res) => {
    try {
        const family = await Family.findAll()
        res.json({
            family,
        })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.safetycheck = async (req, res) => {
    const { service_idservice, senior_idsenior, socialworker_idsocialworker, completed, state_idstate, description } = req.body
    try {
        // const ex = await Safetycheck.findOne({ where: {  } })
        // if (ex) {
        //     throw new Error('safetycheck exists')
        // }
        const safetycheck = await Safetycheck.create({
            service_idservice: service_idservice, 
            senior_idsenior: senior_idsenior, 
            socialworker_idsocialworker: socialworker_idsocialworker, 
            completed: completed, 
            state_idstate: state_idstate, 
            description: description,
        })
        res.json({ message: "safetycheck created" })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.getsafetycheck = async (req, res) => {
    try {
        const safetycheck = await Safetycheck.findAll()
        res.json({
            safetycheck,
        })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.senior_has_detail = async (req, res) => {
    const { senior_idsenior, detail_iddetail } = req.body
    try {
        const ex = await Senior_has_detail.findOne({
            where: { senior_idsenior: senior_idsenior, detail_iddetail: detail_iddetail }
        })
        if (ex) {
            throw new Error('senior-detail exists')
        }
        const shd = await Senior_has_detail.create({
            senior_idsenior,
            detail_iddetail
        })
        res.json({ message: "senior-detail created" })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.getsenior_has_detail = async (req, res) => {
    try {
        const shd = await Senior_has_detail.findAll()
        res.json({
            shd,
        })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.senior = async (req, res) => {
    const { address, province, district, phone, name, gender, socialworker_idsocialworker } = req.body
    try {
        const ex = await Senior.findOne({ where: { phone } })
        if (ex) {
            throw new Error('senior exists')
        }
        const senior = await Senior.create({
            address: address,
            province: province,
            district: district,
            phone: phone,
            name: name,
            gender: gender,
            socialworker_idsocialworker: socialworker_idsocialworker,
        })
        res.json({ message: "senior created" })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.getsenior = async (req, res) => {
    try {
        const senior = await Senior.findAll()
        res.json({
            senior,
        })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.service = async (req, res) => {
    const { servicetype } = req.body
    try {
        const ex = await Service.findOne({ where: { servicetype } })
        if (ex) {
            throw new Error('service exists')
        }
        const service = await Service.create({
            servicetype: servicetype,
        })
        res.json({ message: "service created" })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.getservice = async (req, res) => {
    try {
        const service = await Service.findAll()
        res.json({
            service,
        })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.socialworker = async (req, res) => {
    const { address, province, district, phone, id, password, adminoffice, name } = req.body
    try {
        const ex = await Socialworker.findOne({ where: { id } })
        if (ex) {
            throw new Error('socialworker exists')
        }
        const socialworker = await Socialworker.create({
            address: address,
            province: province,
            district: district,
            phone: phone,
            id: id,
            password: password,
            adminoffice_idadminoffice: adminoffice,
            name: name,
        })
        res.json({ message: "socialworker created" })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.getsocialworker = async (req, res) => {
    try {
        const socialworker = await Socialworker.findAll()
        res.json({
            socialworker,
        })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.state = async (req, res) => {
    const { state } = req.body
    try {
        const ex = await State.findOne({ where: { state } })
        if (ex) {
            throw new Error('state exists')
        }
        const states = await State.create({
            state: state,
        })
        res.json({ message: "state created" })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.getstate = async (req, res) => {
    try {
        const state = await State.findAll()
        res.json({
            state,
        })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}