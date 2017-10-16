const path = require('path')
const fs = require('fs')

const { render, renderHead, configureStore } = require('../buildServer/main')

module.exports = function universalLoader(req, res) {
  // TODO: cache filePath contents
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html')

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('read err', err)
      return res.status(404).end()
    }

    serverRender(req, res, htmlData)
      .catch(err => {
        console.error('Render Error', err)
        return res.status(500).json({ message: 'Render Error' })
      })
  })
}

// this does most of the heavy lifting
async function serverRender(req, res, htmlData) {
  const context = { data: {}, head: [], req }
  const store = configureStore()
  // first
  render(req, store, context)

  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    res.redirect(301, context.url)
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
    const RenderedApp = htmlData.replace('<div id="root"></div>', '<div id="root">' + markup + '</div>')
      .replace('<meta-head/>', headMarkup)
      .replace('{{data}}', new Buffer(JSON.stringify(context.data)).toString('base64'))
    if (context.code)
      res.status(context.code)
    res.send(RenderedApp)
  }
}
