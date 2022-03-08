const Brand = require('../model/brand');
const Medicine = require('../model/medicine')
exports.getBrand = async (req, res, next) => {
    try {
        let data = await Brand.findAll({
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
exports.postAddBrand = (req, res, next) => {
    //console.log(req.body);
    try {
    let body_data = {
        BrandName : req.body.BrandName,
        IsDeleted : "1",
    }
    let = {
        BrandName,
        IsDeleted,
    } = body_data;

    Brand.create({
        BrandName,
        IsDeleted,
    });
    res.status(201)
    .json({
        "msg":"Brand data inserted"
    })
} catch (error) {
    res.status(500)
    .json({"ERROR":error})
        
}
  
};

exports.getOneBrand = async (req, res, next) => {
    try {
        let one_data = await Brand.findOne({
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

exports.getBrandId = async (req, res, next) => {
    try {
        let brand_id = await Brand.findOne({
            where:{
                BrandName: req.params.brandName
            },
            raw: true,
            attributes:["id"]
        });
        res.status(200)
        .json(brand_id);
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
}

exports.updateBrand = (req, res, next) => {
    try {
        let body_data = {
            BrandName : req.body.BrandName,
            IsDeleted : "1",
        }
        let = {
            BrandName,
            IsDeleted,
        } = body_data;
        Brand.update({ 
            BrandName:BrandName,
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

exports.deleteBrand = (req, res, next) => {
    try {     
        Medicine.destroy({where:{BrandId:req.params.id}});
        Brand.destroy({where:{id:req.params.id}});
        res.status(200)
        .json({"delete": "Brand data deleted"})
    } catch (error) {
        res.status(500)
        .json({"error": error}) 
    }
};

exports.TempDeleteBrand = (req, res, next) => {
    try {
        Brand.update({ 
            IsDeleted:'0',
         }, {
            where: {
              id: req.params.id
            }
          });
        res.status(200)
        .json({"delete": "Temperory Brand deleted"})
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
}

exports.RegainBrand = (req, res, next) => {
    try {
        Brand.update({ 
            IsDeleted:'1',
         }, {
            where: {
              id: req.params.id
            }
          });
        res.status(200)
        .json({"delete": "Brand regained"})
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
}
