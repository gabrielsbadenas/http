const express = require('express')
const router = require('./controladores/DonacionRouter')
const app = express()
const url = {
        port: 8080,
        ip: 'localhost'
} 
  
app.use('/', router)

app.listen(url.port, url.ip, () => {
        console.log(
                ('http://'+url.ip+':'+url.port+'/')
                .toString()
        )
}) 
