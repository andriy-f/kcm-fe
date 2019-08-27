// const register = require('ignore-styles').default
const express = require('express')
const morgan = require('morgan')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

// redirect to https specifically for Heroku
const nodeHerokuSslRedirect = (environments = ['production'], redirectStatus = 302) => {
    return (req, res, next) => {
        if (environments.indexOf(process.env.NODE_ENV) === -1) {
            return next()
        }

        if (req.headers['x-forwarded-proto'] === 'https') {
            return next();
        }

        res.redirect(redirectStatus, `https://${req.hostname}${req.originalUrl}`);
    }
}

// App setup
const app = express()

app.use(nodeHerokuSslRedirect())

if (isDev) {
    // Setup logger
    app.use(morgan('combined'))
}

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')))

module.exports = app
