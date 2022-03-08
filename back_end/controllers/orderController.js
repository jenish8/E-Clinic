const Order = require('../model/order');
exports.getOrder = async (req, res, next) => {
    try {
        let data = await Order.findAll({
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
exports.postAddOrder = (req, res, next) => {
    //console.log(req.body);
    try {
    let body_data = {
        PatientId : req.body.PatientId,
        OrderDate : req.body.OrderDate,
        OrderStatus : req.body.OrderStatus,
        PaymentMode : req.body.PaymentMode,
        Prescription : req.body.Prescription,
        PaymentTransId : req.body.PaymentTransId,
    }
    let = {
        PatientId,
        OrderDate,
        OrderStatus,
        PaymentMode,
        Prescription,
        PaymentTransId,
    } = body_data;

    Order.create({
        PatientId,
        OrderDate,
        OrderStatus,
        PaymentMode,
        Prescription,
        PaymentTransId
    });
    res.status(201)
    .json({
        "msg":"order inserted"
    })
} catch (error) {
    res.status(500)
    .json({"ERROR":error})
        
}
  
};

exports.getOneOrder = async (req, res, next) => {
    try {
        let one_data = await Order.findOne({
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

exports.updateOrder = (req, res, next) => {
    try {
        let body_data = {
            PatientId : req.body.PatientId,
            OrderDate : req.body.OrderDate,
            OrderStatus : req.body.OrderStatus,
            PaymentMode : req.body.PaymentMode,
            Prescription : req.body.Prescription,
            PaymentTransId : req.body.PaymentTransId,
        }
        let = {
            PatientId,
            OrderDate,
            OrderStatus,
            PaymentMode,
            Prescription,
            PaymentTransId
        } = body_data;
        Order.update({ 
            PatientId:PatientId,
            OrderDate:OrderDate,
            OrderStatus:OrderStatus,
            PaymentMode:PaymentMode,
            Prescription:Prescription,
            PaymentTransId:PaymentTransId
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

exports.deleteOrder = (req, res, next) => {
    try {
        Order.destroy({where:{id:req.params.id}});
        res.status(200)
        .json({"delete": "order deleted"})
    } catch (error) {
        res.status(500)
        .json({"error": error}) 
    }
}
