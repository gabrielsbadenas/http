const fs = require('fs')

//const parsed = JSON.parse(fs.readFileSync('config.json','UTF-8'))
const parsed = require('./config.json')
module.exports = parsed
