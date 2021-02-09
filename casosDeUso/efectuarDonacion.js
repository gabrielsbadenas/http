const Donacion = require('../modelos/Donacion')

function efectuarDonacion(mail, dao, monto, nombre = "anon"){
	let nuevaDonacion
	if(monto>0){
		if(nombre != "anon" && monto > 10000){
			mail.send(nombre, "monto: "+monto)
		}
		nuevaDonacion = new Donacion(
			Math.floor(Math.random() * 100000),
			monto, nombre
		)
		dao.save(nuevaDonacion)
	}else{
		throw "monto insuficiente"
	}
	return nuevaDonacion
}
module.exports = efectuarDonacion
