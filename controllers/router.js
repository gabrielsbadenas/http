const express = require('express')
const bodyParser = require('body-parser')
const Listado = require('../models/listado')
const urlencodedParser = bodyParser.urlencoded({ extended: false }) 
const app = express.Router()

let listado = new Listado()

app.use(express.static('/views'))

//manda una plantilla de una form
app.get('/', function (req, res) {  
  res.sendFile( __dirname + "/views/" + "view.html" )
})  

//recibe los datos ingresados desde el form y los agrega a un arraylist en memoria
app.post('/process_post', urlencodedParser, function (req, res) {  
  response = {  
    nombre: req.body.nombre,  
    monto: req.body.monto  
  }
  if(response.nombre == ""){
  	listado.add(response.monto)
  }else{
  listado.add(response.monto, response.nombre)
  }
  res.redirect('/donaciones')
})  

//muestra todas las donaciones guardadas en memoria
app.get('/donaciones', function(req, res){
  res.send(listado.list)
})

//fix
app.get('/donaciones/:id', function(req, res){
	res.send(listado.donacionesMayoresA(req.params.id))
})

app.get('/', function(req, res){
	res.send('<a href="/donaciones">listado</a>')
})

app.get('*', function(req, res){
	res.send('404 not found')
})
module.exports = app
