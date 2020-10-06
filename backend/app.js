const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
// const passport = require('passport')
const morgan = require('morgan')
const session = require('express-session')
const flash = require('connect-flash')
require('dotenv').config()

const { sequelize } = require('./models')
// const passportConfig = require('./passp

// Router
const indexRouter = require('./routes/index')

const app = express()

sequelize.sync({
    force: false,
    })
    .then(() => {
        console.log('✓ DB connection success.');
    })
    .catch(err => {
        console.error(err);
        console.log('✓ DB connection error');
        process.exit();
    });

// passportConfig(passport)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.set('port', process.env.PORT || 8000)

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false
    },
}))
app.use(flash())
// app.use(passport.initialize())
// app.use(passport.session())


// APi
app.use('/', indexRouter)

// 404 error
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 4-4;
    next(err)
})

app.use((err, req, res) => {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development'? err: {}
    res.status(err.status || 500)
    res.render('error')
})

// Server
app.listen(app.get('port'), () => {
    console.log('waiting on port', app.get('port'))
})