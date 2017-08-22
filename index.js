const express = require('express')
const port = process.env.PORT || 5000

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

const app = express()
app.use(nodeHerokuSslRedirect())
app.use(express.static('build'))

app.listen(port, function () {
    console.log('Static server started on port ' + port)
})