const nodemailer = require('nodemailer')

class Mail{
  constructor(config){
    this.transporter = nodemailer.createTransport(config)
  }
  send(_subject, _text){
    this.transporter.sendMail({
      from: "clementine.davis@ethereal.email",
      to: "cursonodeav@gmail.com",
      subject: _subject,
      text: _text
    })
  }
}

module.exports = Mail
