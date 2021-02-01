const send = require('../mail/send')
const minimo = 10000
const anonima = "anon"

class Donacion{
	constructor(monto, nombre = anonima){
		this.nombre = nombre
		this.setMonto(monto)
	}

	setMonto(monto){
		if(monto < 1){
			this.monto = 0
		}else{
			this.monto = monto
			if(this.nombre != anonima
			 && monto > minimo){
				send(this.nombre,this.monto)
			}
		}
	}

	setNombre(nombre){
		if(nombre==""||nombre==''){
			this.nombre=anonima
		} else {
			this.nombre=nombre
		}
	}

}

module.exports = Donacion
