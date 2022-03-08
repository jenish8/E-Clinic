const User = require('../model/register');

var rn = require('random-number');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const tranpoter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            api_key:
            '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'
        }
    })
);

exports.postUsernameChek = async (req, res, next) => {
    try {
        console.log('call');
        console.log(req.body.username);
        let username = req.body.username;
        console.log(username);
        let get_user = await User.findOne({
            where: {
                uname: username
            },
            attributes: ["id", "uname", "email_id"]
        });
        console.log(get_user);
        var options = {
            min:  1000,
           max:  9999,
           integer: true
          }
         let otp =  rn(options)
         var msg = `Reset Password <br><h1 style="color:red;">${otp}</h1>  `
        var email = {
            to: [get_user.email_id, 'patelkathan1996@gmail.com'],
            from: 'mishelshah07@gmail.com',
            subject: 'E-clinic forgot password',
            text: 'Awesome sauce',
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
        .json({"otp":otp,"user":get_user})


    } catch (error) {

        res.status(500)
        .json({"error":error})
    }
};

exports.postUpdatePassword = (req, res, next) => {
    try {
        bcrypt.hash(req.body.password, saltRounds).then(function(hash){
            let password = hash;
            User.update({
                password: password
            },{
                where:{
                    uname: req.body.uname
                }
            })
        });
       
        res.status(200)
        .json({"msg":"password reset"})
        
    } catch (error) {
        res.status(500)
        .json({"error":error})
    }
}

exports.getOneData = async (req, res, next) => {
    try {
        let one_data = await Register.findOne({
            where:{
                id:req.params.id
            },
            raw:true
        });
       
        res.status(200)
        .json({"data":one_data})
        
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
    
};