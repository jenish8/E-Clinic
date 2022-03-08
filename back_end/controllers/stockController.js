const Med = require('../model/medicine');
const Cart = require('../model/cart');
exports.getStockCount =  (req, res, next) => {
try {
 
    let cart_data = Cart.findAll({
        where: {
            PatientId: req.params.id,
            status: "active"
        },
        attributes:["MedicineId", "Qty"],
        raw: true
    })
    cart_data
    .then(data => {
        data.forEach(e => {
            let getQty = Med.findOne({
                where:{
                    id: e.MedicineId
                },
                attributes:["AvailableQty"],
                raw:true
            })
            let u_qty = Number(e.Qty)
            getQty.then(d => {
                let finalQty = Number(d.AvailableQty) - u_qty;
                Med.update({
                    AvailableQty: finalQty
                },
                {
                    where:{
                        id:e.MedicineId
                    }
                }
                )
            })
        })
    })
    res.status(200)
    .json({"msg":"update"})
} catch (error) {
    
    res.status(500)
    .json({"error": error})
}
}