const express = require('express')
const router = require('./controladores/DonacionRouter')
const options = require('./config/options')
const app = express()

app.use('/', router)

app.listen(options.url.port, options.url.ip, () => {
  console.log(`Server running at http://${options.url.ip}:${options.url.port}/`)
})
