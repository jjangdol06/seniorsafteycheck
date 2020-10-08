const passport = require('passport');
const bcrypt = require('bcrypt');
const { Socialworker } = require('../../../models');

exports.signup = async (req, res, next) => {
    const { address, phone, province, district, id, password, adminoffice_idadminoffice, name } = req.body;
    try {
        const exSocialworker = await Socialworker.findOne({ where: { id } });
        if (exSocialworker) {
            return res.redirect('/signup?error=exist');
        }
        const hash = await bcrypt.hash(password, 12);
        await Socialworker.create({
            address, 
            phone, 
            province, 
            district, 
            id, 
            password: hash, 
            adminoffice_idadminoffice,
            name,
        });
        return res.redirect('/');
    } catch (error) {
        console.error(error);
        return next(error);
    }
}

exports.login = (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.error(authError);
            return next(authError);
        }
        if (!user) {
            return res.redirect(`/?loginError=${info.message}`);
        }
        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    })(req, res, next);
};

exports.logout = (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/');
}