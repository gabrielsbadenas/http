const DonacionDAO = require('../daos/DonacionDAO.js')
const Mailer = require('../mail/mailer')
const efectuarDonacion = require('../casosDeUso/efectuarDonacion')
const listarDonaciones = require('../casosDeUso/listarDonaciones')

const express = require('express')
const rtr = express.Router()

let dao = new DonacionDAO()
let mailer = new Mailer("smtp.ethereal.email",
	'clementine.davis@ethereal.email', 'q5TMu9UzP8Ax8wrF1a')                               

rtr.get('/', function (req, res) {
	res.send(dao.getAll())
})

rtr.post('/', function (req, res) {
	efectuarDonacion(mailer, dao, req.body.monto, req.body.nombre)
	//hacer lo que dice la correccion de
	//implementar los casos de uso
	//usar ids
})

rtr.get('/:id', function (req, res) {
	res.send(listarDonaciones(dao.getAll(), req.params.id))
})

module.exports = rtr
