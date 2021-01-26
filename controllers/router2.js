const express = require('express')
const Donacion = require('../models/donacion.js')
const Listado = require('../dao/listado.js')
const test = require('../test/test2.js')
const router = express.Router()

var listado = new Listado()
test(listado)

//router.use(express.static('public'))

router.get('/donaciones', function(req, res){
	res.send(listado.list)
})

router.get('/donaciones/:id',function(req, res){
	res.send(listado.donacionesMayoresA(
		req.params.id))
})

router.get('/', function(req, res){
	res.send('<a href="/donaciones">listado</a>')
})

router.get('*', function(req, res){
	res.send('404 not found')
})

module.exports = router