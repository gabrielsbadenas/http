const express = require('express'),
router = require('./controladores/DonacionRouter'),
options = require('./config/options'),
app = express(),
user={}
//user=function(){
  /*
  const DonacionDAO = require('../daos/DonacionDAO.js'),
  Mail = require('../mail/mail'),
  efectuarDonacion = require('../casosDeUso/efectuarDonacion'),
  listarDonaciones = require('../casosDeUso/listarDonaciones'),
  options = require('../config/options'),
  express = require('express'),
  rtr = express.Router(),
  bodyParser = require("body-parser")
  
  rtr.use(bodyParser.urlencoded({extended: false}))
  rtr.use(bodyParser.json())
  
  var dao = new DonacionDAO(),
  mail = new Mail(options.mail)
  
  rtr.get('/', function (req, res) {
    res.send(dao.getAll())
  })
  
  rtr.post('/', function(req, res) {
    let donacion
    try{
      donacion = efectuarDonacion(mail, dao, req.body.monto, req.body.nombre)
      res.status(201)
      res.send(donacion)
    }catch(error){
      res.status(400)
      res.send({errorMsg: error})
    }
    res.end()
  })
  
  rtr.get('/:id', function (req, res) {
    try{
      res.send(listarDonaciones(dao.getAll(), req.params.id))
    }catch(error){
      res.send({errorMsg: error})
    }
  })
  
  module.exports = rtr
  */
 //console.log('user')
//}
console.log(user)
app.use('/', router)
//app.use('user',user)
app.listen(options.url.port, options.url.ip, () => {
  console.log(`Server running at http://${options.url.ip}:${options.url.port}/`)
})
