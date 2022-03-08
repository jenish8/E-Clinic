const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');


const tranpoter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            api_key:
            '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'
        }
    })
);

exports.postSendEmail = (req, res, next) => {
    try {
        var msg = `<h1>Name:- ${req.body.name}<br>Email:- ${req.body.email}<br>Phone:-${req.body.phno} <br>Subject:- ${req.body.subject}<br> Message:- ${req.body.msg}  `
        var email = {
            to: ['jenishshah1604@gmail.com','yakshshah750@gmail.com'],
            from: 'mishelshah07@gmail.com',
            subject: 'Hi there',
            text: '',
            html: msg
        };
  
        tranpoter.sendMail(email, function(err, res) {
            if (err) { 
                res.status(500)
                .json({"error": err});
            }
            console.log(res);
        });
        res.status(200)
        .json({"msg":"send"})

    } catch (error) {
        res.status(500)
        .json({"error": error});
    }
}