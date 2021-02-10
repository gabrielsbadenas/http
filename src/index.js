const express = require('express'),
router = require('GastoRouter'),
options = {
  "url": {
    "port": 8080,
    "ip": "localhost"
  }
}

app=express()

app.use('/', router)

app.listen(options.url.port, options.url.ip, () => {
  console.log(`Server running at http://${options.url.ip}:${options.url.port}/`)
})
