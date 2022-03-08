const Register = require('../model/register');
const bcrypt = require('bcrypt');
const { _attributes } = require('../config/database');
const saltRounds = 10;
exports.getUser = async (req, res, next) => {
    try {
        let data = await Register.findAll({
            raw:true
        });
        
        res.status(200)
        .json(data);
    } catch (error) {
        
        res.status(500)
        .json({"error":error})
       
    }
    
};

exports.checkpass =(req,res,next) => {
    try{
        var check;
        let body_data = {
            oldpass: req.body.oldp,
            newpass: req.body.newp,
        }
        bcrypt.compare(body_data.newpass,body_data.oldpass,function(err,result){
           console.log(result);
            if(result)
            {
                check=true;
            }else{
                check=false;
            }
            console.log(check);
            res.json(check);
        });
    }catch (error) {
        res.status(500)
        .json({"ERROR":error})
            
    }
};

// store data to register table
exports.postAddUser = (req, res, next) => {
    //console.log(req.body);
    try {
        
   
    let body_data = {
        fname: req.body.fname,
        photo: req.body.photo,
        lname : req.body.lname,
        email_id: req.body.email_id,
        address: req.body.address,
        uname: req.body.uname,
        utype: req.body.utype,
        contact_no: req.body.contact_no,
        IsDeleted:'1'
    }
    let = {
        fname,
        photo,
        lname,
        email_id,
        address,
        uname,
        utype,
        contact_no,
        IsDeleted
    } = body_data;
    bcrypt.hash(req.body.password, saltRounds).then(function(hash){
        let password = hash
        Register.create({
            fname,
            photo,
            lname,
            email_id,
            address,
            uname,
            password,
            utype,
            contact_no,
            IsDeleted
        });
        res.status(201)
        .json({
            "msg":"user data insert"
        })
    });
    
} catch (error) {
    res.status(500)
    .json({"ERROR":error})
        
}
  
};

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

exports.getAddress = async (req, res, next) => {
    try {
        let one_data = await Register.findOne({
            where:{
                uname:req.params.uname
            },
            raw:true,
            attributes: ["address"]
        });
       
        res.status(200)
        .json({"data":one_data})
        
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
    
};

exports.getPass = async (req, res, next) => {
    try {
        let one_data = await Register.findOne({
            where:{
                uname:req.params.uname
            },
            attributes:['password']
        });
       
        res.status(200)
        .json({"data":one_data})
        
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
    
};

exports.updateData = (req, res, next) => {
    try {
        let body_data = {
            fname: req.body.fname,
            photo: req.body.photo,
            lname : req.body.lname,
            email_id: req.body.email_id,
            address: req.body.address,
            uname: req.body.uname,
            password: req.body.password,
            utype: req.body.utype,
            contact_no: req.body.contact_no,
            IsDeleted:'1'
        }
        let = {
            fname,
            photo,
            lname,
            email_id,
            address,
            uname,
            password,
            utype,
            contact_no,
            IsDeleted
        } = body_data;
        Register.update({ 
            fname:fname,
            photo:photo,
            lname:lname,
            email_id:email_id,
            address:address,
            uname:uname,
            password:password,
            utype:utype,
            contact_no:contact_no,
         }, {
            where: {
              id: req.params.id
            }
          });
        
        
    
        
        res.status(200)
        .json({"msg":req.params.id});
    } catch (error) {
        res.status(500)
        .json({"error": error})
        
    }
};

exports.deleteData = (req, res, next) => {
    try {
        Register.destroy({where:{id:req.params.id}});
        res.status(200)
        .json({"delete": "delete data"})
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
};

exports.TempDeleteData = (req, res, next) => {
    try {
        Register.update({ 
            IsDeleted:'0',
         }, {
            where: {
              id: req.params.id
            }
          });
        res.status(200)
        .json({"delete": "Temperory user deleted"})
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
}

exports.RegainData = (req, res, next) => {
    try {
        Register.update({ 
            IsDeleted:'1',
         }, {
            where: {
              id: req.params.id
            }
          });
        res.status(200)
        .json({"delete": "User regained"})
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
}

exports.updateDataUser = (req, res, next) => {
    try {
        let body_data = {
            fname: req.body.fname,
            lname : req.body.lname,
            email_id: req.body.email_id,
            address: req.body.address,
            contact_no: req.body.contact_no,
            IsDeleted:'1'
        }
        let = {
            fname,
            lname,
            email_id,
            address,
            contact_no,
            IsDeleted
        } = body_data;
        Register.update({ 
            fname:fname,
            lname:lname,
            email_id:email_id,
            address:address,
            contact_no:contact_no,
         }, {
            where: {
              uname: req.params.uname
            }
          });
        
        
    
        
        res.status(200)
        .json({"msg":req.params.uname});
    } catch (error) {
        res.status(500)
        .json({"error": error})
        
    }
};

exports.deleteData = (req, res, next) => {
    try {
        Register.destroy({where:{id:req.params.id}});
        res.status(200)
        .json({"delete": "delete data"})
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
};

exports.getOneUser = async (req, res, next) => {
    try {
        let one_data = await Register.findOne({
            where:{
                uname:req.params.uname
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