const express = require('express')
const router = require('./controllers/router')
const app = express()
const url = {
	port: 8080,
	ip: '192.168.0.94'
}

app.use('/', router)

app.listen(url.port, url.ip, () => {
	console.log(
		('http://'+url.ip+':'+url.port+'/')
		.toString()
	)
})
