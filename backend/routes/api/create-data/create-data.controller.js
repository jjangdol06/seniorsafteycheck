const { Adminoffice, State, Service, Disease, Socialworker, Senior, Senior_has_disease, Family } = require('../../../models')

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

exports.disease = async (req, res) => {
    const { diseasename, risk } = req.body
    try {
        const ex = await Disease.findOne({ where: { diseasename } })
        if (ex) {
            throw new Error('disease exists')
        }
        const disease = await Disease.create({
            diseasename: diseasename,
            risk: risk,
        })
        res.json({ message: "disease created" })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.getdisease = async (req, res) => {
    try {
        const disease = await Disease.findAll()
        res.json({
            disease,
        })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.socialworker = async (req, res) => {
    const { address, province, district, phone, id, password, adminoffice } = req.body
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

exports.senior = async (req, res) => {
    const { address, province, district, phone } = req.body
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


exports.family = async (req, res) => {
    const { address, relation, phone, idsenior } = req.body
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

exports.senior_has_disease = async (req, res) => {
    const { senior_idsenior, disease_iddisease } = req.body
    try {
        const ex = await Senior_has_disease.findOne({
            where: { senior_idsenior: senior_idsenior, disease_iddisease: disease_iddisease }
        })
        if (ex) {
            throw new Error('senior-disease exists')
        }
        const family = await Senior_has_disease.create({
            senior_idsenior,
            disease_iddisease
        })
        res.json({ message: "senior-disease created" })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

exports.getsenior_has_disease = async (req, res) => {
    try {
        const shd = await Senior_has_disease.findAll()
        res.json({
            shd,
        })
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}