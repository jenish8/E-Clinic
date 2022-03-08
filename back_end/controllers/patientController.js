const Patient = require('../model/patient');
const Appointment = require('../model/appointment');

exports.getPatient = async (req, res, next) => {
    try {
        let data = await Patient.findAll({
            raw:true
        });
        
        res.status(200)
        .json(data);
    } catch (error) {
        
        res.status(500)
        .json({"error":error})
       
    }
    
};

// store data to register table
exports.postAddPatient = (req, res, next) => {
    //console.log(req.body);
    try {
        
   
    let body_data = {
        fname: req.body.fname,
        lname : req.body.lname,
        email_id: req.body.email_id,
        address: req.body.address,
        dob:req.body.dob,
        login_id: req.body.login_id,
        password: req.body.password,
        gender: req.body.gender,
        contact_no: req.body.contact_no,
        photo:req.body.photo,
        IsDeleted:'1'
    }
    let = {
        fname,
        lname,
        email_id,
        address,
        dob,
        login_id,
        password,
        gender,
        photo,
        contact_no,
        IsDeleted
    } = body_data;

    Patient.create({
        fname,
        lname,
        email_id,
        address,
        dob,
        login_id,
        password,
        gender,
        photo,
        contact_no,
        IsDeleted
    });
    res.status(201)
    .json({
        "msg":"patient inserted"
    })
} catch (error) {
    res.status(500)
    .json({"ERROR":error})
        
}
  
};

exports.getOnePatient = async (req, res, next) => {
    try {
        let one_data = await Appointment.findOne({
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

exports.updatePatient = (req, res, next) => {
    try {
        let body_data = {
            fname: req.body.fname,
            lname : req.body.lname,
            email_id: req.body.email_id,
            address: req.body.address,
            dob:req.body.dob,
            login_id: req.body.login_id,
            password: req.body.password,
            gender: req.body.gender,
            contact_no: req.body.contact_no,
            photo:req.body.photo,
            IsDeleted:'1'
        }
        let = {
            fname,
            lname,
            email_id,
            address,
            dob,
            login_id,
            password,
            gender,
            photo,
            contact_no,
            IsDeleted
        } = body_data;
        Patient.update({ 
            fname:fname,
            lname:lname,
            email_id:email_id,
            address:address,
            dob:dob,
            login_id:login_id,
            password:password,
            gender:gender,
            photo:photo,
            contact_no:contact_no
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

exports.deletePatient = (req, res, next) => {
    try {
        Patient.destroy({where:{id:req.params.id}});
        res.status(200)
        .json({"delete": "patient deleted"})
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
};

exports.TempDeletePatient = (req, res, next) => {
    try {
        Patient.update({ 
            IsDeleted:'0',
         }, {
            where: {
              id: req.params.id
            }
          });
        res.status(200)
        .json({"delete": "Temperory patient deleted"})
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
}

exports.RegainPatient = (req, res, next) => {
    try {
        Patient.update({ 
            IsDeleted:'1',
         }, {
            where: {
              id: req.params.id
            }
          });
        res.status(200)
        .json({"delete": "Patient regained"})
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
}

//User All Appoiment Show

exports.getAllAppoiment = (req, res, next) => {
    try {
        let user_appointment_data = Appointment.findAll({
            where:{
                id: req.params.userid
            }
        });
        res.status(200)
        .json(user_appointment_data)
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
}

//take appoiment
exports.postTakeAppoiment = async (req, res, next) => {
    try {
       let = {
        PatientId,
        AppointmentDate,
        AppointmentTime,
        AppointmentTakenDate,
        Status,
        Prescription,
        Fees
       } = req.body

       Appointment.create({
        PatientId,
        AppointmentDate,
        AppointmentTime,
        AppointmentTakenDate,
        Status,
        Prescription,
        Fees
       })
       res.status(200)
       .json({"msg":"insert"})
    } catch (error) {
        res.status(500)
        .json({"error":error})
    }
}