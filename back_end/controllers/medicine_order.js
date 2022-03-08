const Med_Order = require('../model/medicine_order');
exports.getMed_Order = async (req, res, next) => {
    try {
        let data = await Med_Order.findAll({
            raw:true
        });
        
        res.status(200)
        .json(data);
    } catch (error) {    
        res.status(500)
        .json({"error":error})
    
    }
    
};

// store data to Med_order table
exports.postAddMed_Order = (req, res, next) => {
    //console.log(req.body);
    try {
    let body_data = {
        PatientId : req.body.PatientId,
        MedicineId : req.body.MedicineId,
        Qty : req.body.Qty,
        Price : req.body.Price,
        Total:req.body.Total,
        Delivery_Address:req.body.Delivery_Address,
        PaymentMode : req.body.PaymentMode,
    }
    let = {
        PatientId,
        MedicineId,
        Qty,
        Price,
        Total,
        Delivery_Address,
        PaymentMode,
    } = body_data;

    Med_Order.create({
        PatientId,
        MedicineId,
        Qty,
        Price,
        Total,
        Delivery_Address,
        OrderStatus:"Pending",
        PaymentMode,
    });
    res.status(201)
    .json({
        "msg":"Med_order inserted"
    })
} catch (error) {
    res.status(500)
    .json({"ERROR":error})
        
}
  
};

exports.getOneMed_Order = async (req, res, next) => {
    try {
        let one_data = await Med_Order.findOne({
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

exports.updateMed_Order = (req, res, next) => {
    try {
        let body_data = {
            PatientId : req.body.PatientId,
            MedicineId : req.body.MedicineId,
            Qty : req.body.Qty,
            Price : req.body.Price,
            Total:req.body.Total,
            Delivery_Address:req.body.Delivery_Address,
            OrderStatus:req.body.OrderStatus,
            PaymentMode : req.body.PaymentMode,
        }
        let = {
            PatientId,
            MedicineId,
            Qty,
            Price,
            Total,
            Delivery_Address,
            OrderStatus,
            PaymentMode,
        } = body_data;
        Med_Order.update({ 
            PatientId:PatientId,
            MedicineId : MedicineId,
            Qty : Qty,
            Price : Price,
            Total:Total,
            Delivery_Address:Delivery_Address,
            OrderStatus:OrderStatus,
            PaymentMode:PaymentMode,
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

exports.updateAddress = (req, res, next) => {
    try {
        let Delivery_Address=req.body.Delivery_Address;
        Med_Order.update({
            Delivery_Address:Delivery_Address,
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

exports.updateStatus = (req, res, next) => {
    try {
        let OrderStatus=req.body.OrderStatus;
        Med_Order.update({
            OrderStatus:OrderStatus,
         }, {
            where: {
              id: req.params.id,
              OrderStatus:"Pending"
            }
          });
        
        res.status(200)
        .json({"msg":req.params.id});
    } catch (error) {
        res.status(500)
        .json({"error": error})
        
    }
};


exports.deleteMed_Order = (req, res, next) => {
    try {
        Med_Order.destroy({where:{id:req.params.id}});
        res.status(200)
        .json({"delete": "Med_order deleted"})
    } catch (error) {
        res.status(500)
        .json({"error": error}) 
    }
}
