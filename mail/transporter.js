const nodemailer = require('nodemailer')

var mail = {
  transporter: nodemailer.createTransport({
      host: "smtp.ethereal.email",
      post: 587,
      secure: false,
      auth: {
          user: 'clementine.davis@ethereal.email',
          pass: 'q5TMu9UzP8Ax8wrF1a'
      }
  }),
  send: function(_subject, _text){
      var mensaje = {
          from: "clementine.davis@ethereal.email",
          to: "cursonodeav@gmail.com",
          subject: _subject,
          text: _text
      }
      this.transporter.sendMail(mensaje, (error, info) => {
          if(error) {
              res.status(500).send(error.message)
          } else {
              console.log("Email enviado")
              res.status(200).jsonp(req.body)
          }
      })
  }
}
//tengo que pasar por constructor el json
//lo que va con "" son los strings y los nombres de variables
//boolean y numeros van sin ""
class Mail{
	constructor(config){
		this.transporter = nodemailer.createTransport(config)
	}
	send(mensaje){
		this.transporter.sendMail(mensaje)
	}
}


//mail.send("hi","xd")
class Data{
	constructor(host, post, secure, _user, _pass){
		this.host
		this.post
		this.secure
		this.auth = {
			user: _user,
			pass: _pass
		}
	}
}
const m = new Mail()

//module.exports = transporter
