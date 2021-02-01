const transporter = require('./transporter')

function send(_subject, _text){
    var mensaje = {
        from: "clementine.davis@ethereal.email",
        to: "cursonodeav@gmail.com",
        subject: _subject,
        text: _text
    }
    transporter.sendMail(mensaje, (error, info) => {
        if(error) {
            res.status(500).send(error.message)
        } else {
            console.log("Email enviado")
            res.status(200).jsonp(req.body)
        }
    })
}

module.exports = send