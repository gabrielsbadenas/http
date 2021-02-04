const Donacion = require('../modelos/Donacion')

function efectuarDonacion(mailer, dao, monto, nombre="anon"){
	if(nombre != "anon" && monto > 10000){
		mailer.send(nombre, monto)
	}
	dao.add(new Donacion(monto, nombre))
}

module.exports = efectuarDonacion
