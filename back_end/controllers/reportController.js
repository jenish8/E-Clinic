const Reports = require('../model/reports');
exports.getReport = async (req, res, next) => {
    try {
        let data = await Reports.findAll({
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
exports.postAddReport = (req, res, next) => {
    //console.log(req.body);
    try {
    let body_data = {
        PatientId : req.body.PatientId,
        Report : req.body.Report,
        Remarks : req.body.Remarks,
    }
    let = {
        PatientId,
        Report,
        Remarks
    } = body_data;

    Reports.create({
        PatientId,
        Report,
        Remarks
    });
    res.status(201)
    .json({
        "msg":"report inserted"
    })
} catch (error) {
    res.status(500)
    .json({"ERROR":error})
        
}
  
};

exports.getOneReport = async (req, res, next) => {
    try {
        let one_data = await Reports.findOne({
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

exports.updateReport = (req, res, next) => {
    try {
        let body_data = {
            PatientId : req.body.PatientId,
            Report : req.body.Report,
            Remarks : req.body.Remarks,
        }
        let = {
            PatientId,
            Report,
            Remarks
        } = body_data;
        Reports.update({ 
            PatientId:PatientId,
            Report:Report,
            Remarks:Remarks
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

exports.deleteReport = (req, res, next) => {
    try {
        Reports.destroy({where:{id:req.params.id}});
        res.status(200)
        .json({"delete": "delete data"})
    } catch (error) {
        res.status(500)
        .json({"error": error}) 
    }
}
