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
			number: 11
		},
		number:12345678
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
constructor(country,area,number){
this.phone=country+area+number
	//posible bug al sumar numeros y strings en js se puede llegar a hacer una operacion matematica en lugar de concatenar strings
}
}
class Email{
constructor(sub,domain){
this.email=sub+'@'+domain
}
}
class Address{
constructor(province,street,number,door,city,postalcode){
this. province= province
this. street= street
this. number= number
this. door= door
this. city= city
this. postalcode=postalcode 
}
}
class Document{
constructor(tipo,numero){
this.tipo=tipo
	this.numero=numero
}
}
class Name{
constructor(first,last){
this.first=first
this.last=last
}
}/*
let users = [user0]
function saveAsJSON(user){
json.add(user)
	users.add(user)
}
*/
//todo: hacerlo pero con class y constructor
