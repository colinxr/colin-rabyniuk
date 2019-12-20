require('dotenv').config()

const express = require('express')
const next    = require('next')
const port    = parseInt(process.env.PORT, 10) || 3000
const dev     = process.env.NODE_ENV !== 'production'
console.log(dev)
console.log(process.env.NODE_ENV)
const nextApp = next({dev})
const handle  = nextApp.getRequestHandler()
const bodyParser = require('body-parser')



nextApp.prepare().then(() => {
  const app = express()

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json())

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