const user0 = {
	nombres: {
		primer: 'gabriel',
		ultimo: 'badenas'
	},
	documento:{
		tipo:'dni',
		numero:'12345678'
	},
	domicilio:{
		provincia:'caba',
		calle:'rivadavia',
		numero:1,
		puerta:'pb',
		localidad:'comuna 11',
		codigopostal:'1416'
	},
	email: {
		sub: 'gabrielsbadenas',
		at: '@',
		domain: 'gmail.com'
	},
	phone: {
		country: {
			name: 'ar',
			code: '+54'
		},
		area: {
			number: entero(11)
		},
		number:entero(12345678)
	}
}
class User{
constructor(phone,email,address,name,documento){
	this.phone=phone
	this.email=email
	this.address=address
	this.documento=documento
	this.name=name
}
}
class Phone{
constructor(){}
}
class Email{
constructor(){}
}
class Address{
constructor(){}
}
class Document{
constructor(){}
}
class Name{
constructor(first,last){
this.first=first
this.last=last
}
}
//todo: hacerlo pero con class y constructor
