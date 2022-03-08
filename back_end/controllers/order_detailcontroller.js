const Details = require('../model/order_details');
exports.getDetails = async (req, res, next) => {
    try {
        let data = await Details.findAll({
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
exports.postAddDetails = (req, res, next) => {
    //console.log(req.body);
    try {
    let body_data = {
        OrderId : req.body.OrderId,
        MedicineId : req.body.MedicineId,
        Qty : req.body.Qty,
        Price : req.body.Price,
    }
    let = {
        OrderId,
        MedicineId,
        Qty,
        Price,
    } = body_data;

    Details.create({
        OrderId,
        MedicineId,
        Qty,
        Price,
    });
    res.status(201)
    .json({
        "msg":"order details inserted"
    })
} catch (error) {
    res.status(500)
    .json({"ERROR":error})
        
}
  
};

exports.getOneDetails = async (req, res, next) => {
    try {
        let one_data = await Details.findOne({
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

exports.updateDetails = (req, res, next) => {
    try {
        let body_data = {
            OrderId : req.body.OrderId,
            MedicineId : req.body.MedicineId,
            Qty : req.body.Qty,
            Price : req.body.Price,
        }
        let = {
            OrderId,
            MedicineId,
            Qty,
            Price,
        } = body_data;
        Details.update({ 
            OrderId:OrderId,
            MedicineId:OrderId,
            Qty:Qty,
            Price:Price,
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

exports.deleteDetails = (req, res, next) => {
    try {
        Details.destroy({where:{id:req.params.id}});
        res.status(200)
        .json({"delete": "order details deleted"})
    } catch (error) {
        res.status(500)
        .json({"error": error}) 
    }
}
