const Donacion = require('../models/donacion.js')

let anonima = "anon"

class Listado{
	constructor(){
		this.list = []
	}

	add(monto, nombre = anonima){
		let nueva = new Donacion(monto, nombre)
		this.list.push(nueva)
	}

	ad(nueva){
		this.list.push(nueva)
	}

	donacionesMayoresA(monto){
		const mayores = []
		for (let i = 0; i < this.list.length; i++) {
			if(this.list[i].monto > monto && this.list[i].nombre != anonima){
				mayores.push(this.list[i])
			}
		}
		return mayores
	}
}

module.exports = Listado
