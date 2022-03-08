const Time = require('../model/clinic_time');
exports.getTime = async (req, res, next) => {
    try {
        let data = await Time.findAll({
            raw:true
        });
        
        res.status(200)
        .json(data);
    } catch (error) {
        
        res.status(500)
        .json({"error":error})
       
    }
    
};

// store data to time table
exports.postAddTime = (req, res, next) => {
    try {
    let body_data = {
        ClinicId: req.body.ClinicId,
        Days: req.body.Days,
        From: req.body.From,
        To: req.body.To,
        IsDeleted:'1'
    }
    let = {
        ClinicId,
        Days,
        From,
        To,
        IsDeleted,
    } = body_data;

    Time.create({
        ClinicId,
        Days,
        From,
        To,
        IsDeleted,
    });
    res.status(201)
    .json({
        "msg":"clinic time inserted"
    })
} catch (error) {
    res.status(500)
    .json({"ERROR":error})
        
}
  
};

exports.getOneTime = async (req, res, next) => {
    try {
        let one_data = await Time.findOne({
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

exports.updateTime = (req, res, next) => {
    try {
        let body_data = {
            ClinicId: req.body.ClinicId,
            Days: req.body.Days,
            From: req.body.From,
            To: req.body.To,
            IsDeleted:'1'
        }
        let = {
            ClinicId,
            Days,
            From,
            To,
            IsDeleted,
        } = body_data;
        Time.update({ 
            ClinicId,
            Days,
            From,
            To,
            IsDeleted,
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

exports.deleteTime = (req, res, next) => {
    try {
        Time.destroy({where:{id:req.params.id}});
        res.status(200)
        .json({"delete": "clinic time deleted"})
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
};

exports.TempDeleteTime = (req, res, next) => {
    try {
        Time.update({ 
            IsDeleted:'0',
         }, {
            where: {
              id: req.params.id
            }
          });
        res.status(200)
        .json({"delete": "Temperory clinic time deleted"})
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
}

exports.RegainTime = (req, res, next) => {
    try {
        Time.update({ 
            IsDeleted:'1',
         }, {
            where: {
              id: req.params.id
            }
          });
        res.status(200)
        .json({"delete": "Clinic time regained"})
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
}