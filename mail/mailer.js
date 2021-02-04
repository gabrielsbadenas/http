const nodemailer = require('nodemailer')

class Mailer{
	constructor(_host, _user, _pass, _to="cursonodeav@gmail.com"){
		this.user = _user
		this.to = _to
		this.transporter = nodemailer.createTransport({
			host: _host,
			post: 587,
			secure: false,
			auth: {
				user: _user,
				pass: _pass
			}
		})
	}

	send(_subject, _text){
		var msg = {
			from: this.user,
			to: this.to,
			subject: _subject,
			text: _text
		}
		transporter.sendMail(msg, (error, info) => {
			try{
				res.status(200).jsonp(req.body)
			}catch(error) {
				res.status(500).send(error.message)
			}
		})
	}
}

module.exports = Mailer
