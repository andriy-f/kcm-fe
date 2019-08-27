// const register = require('ignore-styles').default
const express = require('express')
const morgan = require('morgan')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

// redirect to https
const nodeSslRedirect = (redirectStatus = 302) => (req, res, next) => {
  if (process.env.KCM_FE_HTTPS_REDIRECT !== 'true') {
    return next()
  }

  if (req.headers['x-forwarded-proto'] === 'https') {
    // Heroku, for example
    return next();
  }

  res.redirect(redirectStatus, `https://${req.hostname}${req.originalUrl}`);
}


// App setup
const app = express()

app.use(nodeSslRedirect())

if (isDev) {
  // Setup logger
  app.use(morgan('combined'))
}

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build/index.html'));
})

module.exports = app
