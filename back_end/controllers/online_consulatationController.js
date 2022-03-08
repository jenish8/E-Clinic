const Online_consulatation = require('../model/online_consultation');
exports.getData = async (req, res, next) => {
    try {
        let data = await Online_consulatation.findAll({
            raw:true
        });
        
        res.status(200)
        .json(data);
    } catch (error) {    
        res.status(500)
        .json({"error":error})
    
    }
    
};

// store data to order table
exports.postAddData = (req, res, next) => {
    //console.log(req.body);
    try {
    let body_data = {
        PatientId : req.body.PatientId,
        ConsultationDate : req.body.ConsultationDate,
        Status : req.body.Status,
        Fees : req.body.Fees,
        TimeGiven : req.body.TimeGiven,
        Prescription : req.body.Prescription,
        PaymentTransId : req.body.PaymentTransId,
    }
    let = {
        PatientId,
        ConsultationDate,
        Status,
        TimeGiven,
        Prescription,
        PaymentTransId,
        Fees,
    } = body_data;

    Online_consulatation.create({
        PatientId,
        ConsultationDate,
        Status,
        TimeGiven,
        Prescription,
        PaymentTransId,
        Fees,
    });
    res.status(201)
    .json({
        "msg":"Data inserted"
    })
} catch (error) {
    res.status(500)
    .json({"ERROR":error})
        
}
  
};

exports.getOneData = async (req, res, next) => {
    try {
        let one_data = await Online_consulatation.findOne({
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

exports.updateData = (req, res, next) => {
    try {
        let body_data = {
            PatientId : req.body.PatientId,
            ConsultationDate : req.body.ConsultationDate,
            Status : req.body.Status,
            TimeGiven : req.body.TimeGiven,
            Prescription : req.body.Prescription,
            PaymentTransId : req.body.PaymentTransId,
            Fees : req.body.Fees,
        }
        let = {
            PatientId,
            ConsultationDate,
            Status,
            TimeGiven,
            Prescription,
            PaymentTransId,
            Fees,
        } = body_data;
        Online_consulatation.update({ 
            PatientId:PatientId,
            ConsultationDate:ConsultationDate,
            Status:Status,
            TimeGiven:TimeGiven,
            Prescription:Prescription,
            PaymentTransId:PaymentTransId,
            Fees:Fees,
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
        Online_consulatation.destroy({where:{id:req.params.id}});
        res.status(200)
        .json({"delete": "Data deleted"})
    } catch (error) {
        res.status(500)
        .json({"error": error}) 
    }
}
