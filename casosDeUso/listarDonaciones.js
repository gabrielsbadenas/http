function listarDonaciones(donaciones, monto){
	var mayores = []
	for (let i = 0; i < donaciones.length; i++) {
		if(donaciones[i].monto > monto && donaciones[i].nombre != "anon"){
			mayores.push(donaciones[i])
		}
	}
	return mayores
}

module.exports = listarDonaciones
