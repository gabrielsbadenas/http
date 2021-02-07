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

class Mail{
  constructor(config){
    this.config = config
    setTransporter(config)

  }
  setTransporter(config){
    this.transporter = nodemailer.createTransport(config)
  }
  send(mensaje){
    this.transporter.sendMail(mensaje,mensaje, (error, info) => {
        if(error) {
            res.status(500).send(error.message)
        } else {
            console.log("Email enviado")
            res.status(200).jsonp(req.body)
        }
    })
  }
}

mail.send("hi","xd")

//module.exports = transporter
