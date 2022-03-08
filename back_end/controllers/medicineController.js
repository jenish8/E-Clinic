const Medicine = require('../model/medicine');
const Sequelize = require('sequelize');
const { Op } = require("sequelize");
exports.getMedicine = async (req, res, next) => {
    try {
        let data = await Medicine.findAll({
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
exports.postAddMedicine = (req, res, next) => {
    //console.log(req.body);
    try {
        
   
    let body_data = {
        MedicineName: req.body.MedicineName,
        BrandId: req.body.BrandId,
        Price : req.body.Price,
        Description: req.body.Description,
        Photo: req.body.Photo,
        AvailableQty: req.body.AvailableQty,
        IsDeleted:'1'
    }
    let = {
        MedicineName,
        BrandId,
        Price,
        Description,
        Photo,
        AvailableQty,
        IsDeleted
    } = body_data;

    Medicine.create({
        MedicineName,
        BrandId,
        Price,
        Description,
        Photo,
        AvailableQty,
        IsDeleted
    });
    res.status(201)
    .json({
        "msg":"Medicine inserted"
    })
} catch (error) {
    res.status(500)
    .json({"ERROR":error})
        
}
  
};

exports.getOneMedicine = async (req, res, next) => {
    try {
        console.log(req.params.id);
        let one_data = await Medicine.findOne({
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

exports.getOneMedicineName = async (req, res, next) => {
    try {
        let one_data = await Medicine.findAll({
            where:{
                MedicineName:req.params.MedicineName
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

exports.getSubMedicine = async (req, res, next) => {
    try {
        console.log('******');
        console.log(req.params.MedicineName);
        console.log('******');
        let sub = req.params.MedicineName;
        sub = `${sub}%`;
        console.log(sub);
        let one_data = await Medicine.findAll({
            where:{
                MedicineName:{
                    [Op.like]:sub
                }
            }, 
            raw:true
        });
        console.log(sub);
       
        res.status(200)
        .json({"data":one_data})
        
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
    
};

exports.getMedQty = async (req, res, next) => {
    try {
        let one_data = await Medicine.findOne({
            where:{
                id:req.params.MedicineId
            },
            raw:true,
            attributes:["AvailableQty"]
        });
       
        res.status(200)
        .json({"data":one_data})
        
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
    
};

exports.updateMedicine = (req, res, next) => {
    try {
        let body_data = {
            MedicineName: req.body.MedicineName,
            BrandId: req.body.BrandId,
            Price : req.body.Price,
            Description: req.body.Description,
            Photo: req.body.Photo,
            AvailableQty: req.body.AvailableQty,
            IsDeleted:'1'
        }
        let = {
            MedicineName,
            BrandId,
            Price,
            Description,
            Photo,
            AvailableQty,
            IsDeleted
        } = body_data;
        Medicine.update({ 
            MedicineName:MedicineName,
            BrandId:BrandId,
            Price:Price,
            Description:Description,
            Photo:Photo,
            AvailableQty:AvailableQty,
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

exports.deleteMedicine = (req, res, next) => {
    try {
        Medicine.destroy({where:{id:req.params.id}});
        res.status(200)
        .json({"delete": "delete data"})
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
};

exports.TempDeleteMedicine = (req, res, next) => {
    try {
        Medicine.update({ 
            IsDeleted:'0',
         }, {
            where: {
              id: req.params.id
            }
          });
        res.status(200)
        .json({"delete": "Medicine deleted"})
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
}

exports.RegainMedicine = (req, res, next) => {
    try {
        Medicine.update({ 
            IsDeleted:'1',
         }, {
            where: {
              id: req.params.id
            }
          });
        res.status(200)
        .json({"delete": "Medicine regained"})
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
}