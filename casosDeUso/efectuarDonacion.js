const Donacion = require('../modelos/Donacion')

//todo hacer andar el modulo de mails
function efectuarDonacion(mailer, dao, monto, nombre = "anon"){
	if(nombre != "anon" && monto > 10000){
		mailer.send(nombre, monto)
	}
	dao.save(new Donacion(monto, nombre))
}

module.exports = efectuarDonacion
