let minimo = 10000
let anonima = "anon"

function mandarMail(){
	console.log("cursonodeav@gmail.com")
}

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
				mandarMail()
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
