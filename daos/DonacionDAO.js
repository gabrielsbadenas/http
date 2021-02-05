class DonacionDAO{
	constructor(){
		this.donaciones = []
	}

	save(donacion){
		this.donaciones.push(donacion)
	}
	
	getAll(){
		return this.donaciones
	}
}

module.exports = DonacionDAO
