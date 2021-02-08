const DonacionDAO = require('../daos/DonacionDAO.js'),
//Mailer = require('../mail/mailer'),
efectuarDonacion = require('../casosDeUso/efectuarDonacion'),
listarDonaciones = require('../casosDeUso/listarDonaciones'),
options = require('../config/options'),
bodyParser = require('body-parser'),
urlencodedParser = bodyParser.urlencoded({ extended: false }),
express = require('express'),
rtr = express.Router()

rtr.use(bodyParser.json())

//let mailer = new Mailer(options.mail.host,options.mail.auth.user, options.mail.auth.pass)
let dao = new DonacionDAO()
efectuarDonacion(mailer, dao, 14888, "gabriel")

rtr.get('/', function (req, res) {
	res.send(dao.getAll())
})

//todo arreglar el post
rtr.post('/', urlencodedParser, function(req, res) {
	//console.log(req.body)
	efectuarDonacion(mailer, dao, req.bod.monto, req.body.nombre)
	res.end('ok')
	//efectuarDonacion(mailer, dao, req.body.monto, req.body.nombre)
	//hacer lo que dice la correccion de
	//implementar los casos de uso
	//usar ids
	// https://expressjs.com/en/resources/middleware/body-parser.html
})

rtr.get('/:id', function (req, res) {
	res.send(listarDonaciones(dao.getAll(), req.params.id))
})

module.exports = rtr
