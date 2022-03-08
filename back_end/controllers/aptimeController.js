const Aptime = require('../model/aptime');
const Appoinment2 = require('../model/appointment');
const { Op } = require("sequelize");
const unique = require('array-unique');
const arrayUnique = require('array-unique');
//Show Time 
// exports.getShowTIme = async (req, res, next) => {
//  try {
//     let time_data = await Aptime.findAll({
//         where:{
//             timeSlot: {
//                 [Op.gt]: req.params.time,
//             }
//         },
//         raw:true
//     });
//     res.status(200)
//     .json(time_data);
//  } catch (error) {
//      res.status(500)
//      .json({"error": error})
//  }
// };

exports.getShowTIme = async (req, res, next) => {
    try {
       let time_data = await Aptime.findAll({
           where:{
               timeSlot: {
                   [Op.gt]: req.params.time,
               },
           },
           raw:true
       });
       res.status(200)
       .json(time_data);
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
   };

//all time
exports.getAlltime = async (req, res, next) => {
    try {
       let time_data = await Aptime.findAll({
        order:[
            ['timeSlot','ASC']
       ],
           raw:true
       });
       res.status(200)
       .json(time_data);
    } catch (error) {
        res.status(500)
        .json({"error": error})
    }
   };

exports.postDate = (req, res, next) => {
    try {
        let = {
            timeSlot,
            status
        } = req.body
        Aptime.create({
            timeSlot,
            status
        });
        res.status(200)
        .json({"msg": "status"})
    } catch (error) {
        res.status(500)
        .json({"errpr":error})
    }
}

// when user press datepicker to get appoiment time then show avalble time

exports.getUserShowTime1 = (req, res, next) => {
    try {
        console.log('*********');
        console.log(req.params.date);
        var  time_slot = [];
        var usedtime = [];
        var showtime =[];
        var i,j,flag=0;
        let data = Appoinment2.findAll({
            where:{
                AppointmentDate: req.params.date,
                Status: {
                    [Op.ne]: "Cancelled",
                }
            },
            raw: true,
        });
        data.then(d => {
            d.forEach(e => {
                usedtime.push(e.AppointmentTime);
                let uatime = Aptime.findAll({
                    where:{
                        timeSlot: {
                            [Op.ne]: e.AppointmentTime, 
                            [Op.gt]: req.params.time,
                        }
                    },
                    order:[
                        ['timeSlot','ASC']
                   ],
                    raw:true,
                })
                uatime
                .then(u => {
                    u.forEach(h => {
                        time_slot.push(h.timeSlot)
                    })
                })
            })
            console.log(usedtime);
        })
        setTimeout(() => {
            for(i=0;i<time_slot.length;i++)
            {
                flag=0;
                for(j=0;j<usedtime.length;j++)
                {
                    if(time_slot[i]==usedtime[j])
                    {
                        flag=1;
                    }
                }
                if(flag==0)
                {
                    showtime.push(time_slot[i]);
                }
            }
            res.status(200)
            .json(showtime);
        }, 3000);
    } catch (error) {
        res.status(500)
        .json({"msg":error})
    }
}

exports.getUserShowTime = (req, res, next) => {
    try {
        console.log('*********');
        console.log(req.params.date);
        var  time_slot = [];
        var usedtime = [];
        var showtime =[];
        var i,j,flag=0;
        let data = Appoinment2.findAll({
            where:{
                AppointmentDate: req.params.date,
                Status: {
                    [Op.ne]: "Cancelled",
                }
            },
            raw: true
        });
        console.log(data);
        data.then(d => {
            d.forEach(e => {
                usedtime.push(e.AppointmentTime);
                console.log(e.AppointmentTime);
                let uatime = Aptime.findAll({
                    where:{
                        timeSlot: {
                            [Op.ne]: e.AppointmentTime, 
                        },
                    },
                    order:[
                        ['timeSlot','ASC']
                   ],
                    raw:true
                })
                uatime
                .then(u => {
                    u.forEach(h => {
                        time_slot.push(h.timeSlot)
                    })
                })
            })
        })
        setTimeout(() => {
            for(i=0;i<time_slot.length;i++)
            {
                flag=0;
                for(j=0;j<usedtime.length;j++)
                {
                    if(time_slot[i]==usedtime[j])
                    {
                        flag=1;
                    }
                }
                if(flag==0)
                {
                    showtime.push(time_slot[i]);
                }
            }
            res.status(200)
            .json(showtime)
        }, 3000);
    } catch (error) {
        res.status(500)
        .json({"msg":error})
    }
}



