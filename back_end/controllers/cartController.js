const Cart = require('../model/cart');
const Medicin = require('../model/medicine');
const Med_Order=require('../model/medicine_order');
var dateFormat = require("dateformat");
exports.getCart = async(req, res, next) => {
    try {
        let data = await Cart.findAll({
            raw: true
        });

        res.status(200)
            .json(data);
    } catch (error) {
        res.status(500)
            .json({ "error": error })

    }

};

// store data to register table
exports.postAddCart = async(req, res, next) => {
    //console.log(req.body);

    try {

        let body_data = {
            PatientId: req.body.PatientId,
            MedicineId: req.body.MedicineId,
            Price:req.body.Price
        }
        let = {
            PatientId,
            MedicineId,
            Qty,
            Price,
            status
        } = body_data;

        Cart.create({
            PatientId,
            MedicineId,
            Qty,
            Price,
            status
        });
        // let medicinAdd = [];
        // console.log(req.body);
        // req.body.medicin.forEach((data => {
        //         medicinAdd.push(data)
        //     }))
        //     //   var body_data = {
        //     //      PatientId : 3,
        //     //      MedicineId :3,
        //     //      Qty : 2
        //     //  }
        //     //  medicinAdd.push(body_data)
        //     //  body_data = {
        //     //     PatientId : 3,
        //     //     MedicineId :3,
        //     //     Qty : 4
        //     // }
        //     // medicinAdd.push(body_data)


        // Cart.bulkCreate(await medicinAdd, {
        //         returning: true
        //     }).then(data => console.log("add"))
        //     .catch(error => console.log(error))


        res.status(201)
            .json({
                "msg": "user data insert"
            })
    } catch (error) {
        res.status(500)
            .json({ "ERROR": error })

    }

};

exports.getOneCart = async(req, res, next) => {
    try {
        let one_data = await Cart.findOne({
            where: {
                id: req.params.id
            },
            raw: true
        });

        res.status(200)
            .json({ "data": one_data })

    } catch (error) {
        res.status(500)
            .json({ "error": error })
    }

};

exports.checkCart = async(req, res, next) => {
    try {
        let one_data = await Cart.findOne({
            where: {
                PatientId: req.params.pid,
                MedicineId:req.params.mid,
                status:"active"
            },
            raw: true
        });

        res.status(200)
            .json({ "data": one_data })

    } catch (error) {
        res.status(500)
            .json({ "error": error })
    }

};

exports.updateCart = (req, res, next) => {
    try {
        let body_data = {
            PatientId: req.body.PatientId,
            MedicineId: req.body.MedicineId,
            Qty: req.body.Qty,
        }
        let = {
            PatientId,
            MedicineId,
            Qty
        } = body_data;
        Cart.update({
            PatientId: PatientId,
            MedicineId: MedicineId,
            Qty: Qty
        }, {
            where: {
                id: req.params.id
            }
        });

        res.status(200)
            .json({ "msg": req.params.id });
    } catch (error) {
        res.status(500)
            .json({ "error": error })

    }
};

exports.updateCartPrice = (req, res, next) => {
    try {
        let body_data = {
            PatientId: req.body.PatientId,
            MedicineId:req.body.MedicineId,
            Qty: req.body.Qty,
            Price:req.body.Price,
        }
        let = {
            PatientId,
            MedicineId,
            Qty,
            Price
        } = body_data;
        Cart.update({
            Qty: Qty,
            Price:Price
        }, {
            where: {
                PatientId: req.params.id,
                MedicineId:req.body.MedicineId,
            }
        });
        console.log(body_data);
        res.status(200)
            .json({ "msg": Qty,Price});
    } catch (error) {
        res.status(500)
            .json({ "error": error })

    }
};

exports.deleteCart = (req, res, next) => {
    try {
        Cart.destroy({ where: { id: req.params.id } });
        res.status(200)
            .json({ "delete": "delete data" })
    } catch (error) {
        res.status(500)
            .json({ "error": error })
    }
};

exports.getPurches = async(req, res, next) => {
    try {
        var temp = [];
        var sum = 0;
        let data = await Cart.findAll({
            where: {
                PatientId: req.params.id,
                status: "active"
            },
            raw: true,
            attributes: ["id", "MedicineId", "Qty"]
        })
        data.forEach((async ele => {
            let md = await Medicin.findOne({
                where: {
                    id: ele.MedicineId
                },
                raw: true,
                attributes: ["MedicineName", "Price", "Photo", "Description"]
            })
            console.log(`cart id ${ele.id}`)
            md.id = ele.id;
            md.MedicineId=ele.MedicineId;
            md.Qty=ele.Qty;
            sum = sum + Number(md["Price"])
            temp.push(md)

        }))

        setTimeout(() => {
            console.log(sum);
            res.status(200)
                .json({ "inf": temp, "sum": sum})
        }, 3000);


    } catch (error) {
        res.status(500)
            .json({ "error": error })
    }
}

exports.updateCardS = (req, res, next) => {
    Cart.update({
        status: "off"
    }, {
        where: {
            PatientId: req.params.id
        }
    });
    res.status(200)
        .json({ "g": "update" })
    
}
exports.getOrder = async(req, res, next) => {
    try {

        var temp = [];
        let data = await Cart.findAll({
            where: {
                PatientId: req.params.id,
                status: "off"
            },
            raw: true,
            attributes: ["MedicineId", "Qty", "updatedAt"]
        })
        data.forEach((async ele => {
                let md = await Medicin.findOne({
                    where: {
                        id: ele.MedicineId
                    },
                    raw: true,
                    attributes: ["MedicineName", "Price","Photo"]
                })
                console.log(ele.Qty);
                console.log(md.MedicineName);
                let one_data = await Med_Order.findOne({
                    where:{
                        MedicineId:ele.MedicineId,
                        PatientId:req.params.id,
                    },
                    raw:true,
                    attributes: ["id","OrderStatus", "PaymentMode","Delivery_Address"]
                });
                console.log(one_data);
                temp.push({
                    "orderid":one_data.id,
                    "manem": md.MedicineName,
                    "price": md.Price,
                    "qty": ele.Qty,
                    "total": md.Price * Number(ele.Qty),
                    "status":one_data.OrderStatus,
                    "mode":one_data.PaymentMode,
                    "address":one_data.Delivery_Address,
                    "date": dateFormat(ele.updatedAt, "fullDate")
                });
            }))
            // console.log('***');
            // console.log(order_name);

        setTimeout(() => {
            console.log(temp);
            res.status(200)
                .json({ "inf": temp })
        }, 2000);


    } catch (error) {
        res.status(500)
            .json({ "error": error })
    }
}