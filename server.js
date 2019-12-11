const express = require('express')
const next    = require('next')
const port    = parseInt(process.env.PORT, 10) || 3000
const dev     = process.nextTick.NODE_ENV !== 'production'
const nextApp = next({dev})
const handle  = nextApp.getRequestHandler()
const bodyParser = require('body-parser')

require('dotenv').config()

nextApp.prepare().then(() => {
  const app = express()

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json())

  // app.get('/post/:id', (req, res) => {
  //   return nextApp.render(req, res, '/post', { id: req.params.id })
  // })

  app.get('/journal/:id', (req, res) => {
    return nextApp.render(req, res, '/post', { id: req.params.id })
  })

  app.all('*', (req, res) => handle(req, res))

  app.listen(port, (err) => {
    if (err) throw err
    console.log('>>> Here we go!')
    console.log(`>>> Ready on http://localhost:${port}`)
  })
}).catch((err) => {
  console.error(err)
})