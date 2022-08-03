//const DonacionDAO = require('../daos/DonacionDAO.js'),
//Mail = require('../mail/mail'),
//efectuarDonacion = require('../casosDeUso/efectuarDonacion'),
//listarDonaciones = require('../casosDeUso/listarDonaciones'),
//options = require('../config/options'),
const express = require('express'),
	rtr = express.Router(),
	bodyParser = require("body-parser")

rtr.use(bodyParser.urlencoded({ extended: false }))
rtr.use(bodyParser.json())

//let dao = new DonacionDAO(),
//mail = new Mail(options.mail)
/*
rtr.get('/', function (req, res) {
	res.send('hola mundo')//dao.getAll())
})*/
function entero(numero) {
	return +numero
}
let user0 = {
	nombres: {
		primer: 'gabriel',
		ultimo: 'badenas'
	},
	email: {
		sub: 'gabrielsbadenas',
		at: '@',
		domain: 'gmail.com'
	},
	phone: {
		country: {
			name: 'ar',
			code: '+54'
		},
		area: {
			number: entero(11)
		},
		number:entero(12345678)
	}
}
let user = JSON.stringify(user0)
rtr.post('/', function (req, res) {

	try {
		//donacion = efectuarDonacion(mail, dao, req.body.monto, req.body.nombre)
		res.status(201)
		res.send(user)
	} catch (error) {
		res.status(400)
		res.send({ errorMsg: error })
	}
	res.end()
})
rtr.get('/',function(req,res){
	let user0 = {
		nombres: {
			primer: 'gabriel',
			ultimo: 'badenas'
		},
		email: {
			sub: 'gabrielsbadenas',
			at: '@',
			domain: 'gmail.com'
		},
		phone: {
			country: {
				name: 'ar',
				code: '+54'
			},
			area: {
				number: entero(11)
			},
			number:entero(12345678)
		}
	}
	let user = JSON.stringify(user0)
	try{
		res.send(user)
	}catch(error){
		res.send(404)
	}
})
/*
rtr.get('/:id', function (req, res) {
	try{
		res.send(listarDonaciones(dao.getAll(), req.params.id))
	}catch(error){
		res.send({errorMsg: error})
	}
})
*/
module.exports = rtr