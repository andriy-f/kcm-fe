// const register = require('ignore-styles').default
const express = require('express')
const morgan = require('morgan')
const path = require('path')
// const fs = require('fs')
// const md5File = require('md5-file')

const universalLoader = require('./universal.js')

const isDev = process.env.NODE_ENV === 'development'

// const mimeTypes = {
//     '.jpg': 'image/jpeg'
//     , '.png': 'image/png'
// }

// Embed low-size images inside
// register(undefined, (mod, filename) => {
//   const ext = ['.png', '.jpg'].find(f=>filename.endsWith(f))
//   if (!ext) return

//   if (fs.statSync(filename).size < 10000) {
//     const file = fs.readFileSync(filename).toString('base64')
//     const mimeType = mimeTypes[ext] || 'image/jpg'
//     mod.exports = `data:${mimeType};base64,${file}`
//   } else {
//     const hash = md5File.sync(filename).slice(0, 8)
//     const bn = path.basename(filename).replace(/(\.\w{3})$/, `.${hash}$1`)
//     mod.exports = `/static/media/${bn}`;
//   }
// })

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

// Server-side rendering of main '/' path (substitute instead index.html from 'build' folder)
app.get('/', universalLoader)
app.get('/index.html', universalLoader)

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')))

// Server-side rendering of rest paths
app.use('/', universalLoader)

module.exports = app
