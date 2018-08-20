const path = require('path')
const fs = require('fs')

const { render, renderHead, configureStore } = require('../buildServer/main')

const indexFilePath = path.resolve(__dirname, '..', 'build', 'index.html')

/**
 * Promise that resolves to index file contents
 * @type {Promise<string>}
 */
const indexFileContents = new Promise((resolve, reject) => {
  fs.readFile(indexFilePath, 'utf8', (err, fileContents) => {
    if (err) {
      reject(err)
    } else {
      console.log('index file has been read')
      resolve(fileContents)
    }
  })
})

/**
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
module.exports = function universalLoader(req, res) {
  indexFileContents
    .then(htmlData => {
      serverRender(req, res, htmlData)
        .catch(err => {
          console.error('Server-side render error', err)
          return res.status(500).json({ message: 'Render Error' })
        })
    })
    .catch(err => {
      console.error('index file read err', err)
      return res.status(404).end()
    })
}

/**
 * This does most of the heavy lifting
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {string} htmlData
 */
async function serverRender(req, res, htmlData) {
  const context = { data: {}, head: [], req }
  const store = configureStore()
  // first
  render(req, store, context)

  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    res.redirect(302, context.url)
  }

  // handle our data fetching
  const keys = Object.keys(context.data)
  const promises = keys.map(k => context.data[k])
  const resolved = await Promise.all(promises)
  resolved.forEach((r, i) => context.data[keys[i]] = r)

  //second
  const markup = render(req, store, context)
  const headMarkup = renderHead(context)

  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    res.redirect(301, context.url)
  } else {
    // we're good, add in markup, send the response
    const contextData = new Buffer(JSON.stringify(context.data)).toString('base64')

    const RenderedApp = htmlData.replace('<div id="root"></div>', '<div id="root">' + markup + '</div>')
      .replace('<meta-head/>', headMarkup)
      .replace('window.kcm={}', `
window.kcm={
  Data: '${contextData}',
  apiUrl: '${process.env.REACT_APP_KCM_BACKEND_URL}',
}
`)

    if (context.code) {
      res.status(context.code)
    }

    res.send(RenderedApp)
  }
}
