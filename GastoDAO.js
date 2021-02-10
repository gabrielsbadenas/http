class GastoDAO{
	constructor(){
		this.gastos = []
	}

	save(gastos){
		this.gastos.push(donacion)
	}

	getAll(){
		return this.gastos
	}
}

module.exports = GastoDAO
