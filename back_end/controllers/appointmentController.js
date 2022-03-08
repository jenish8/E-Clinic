const Appointment = require('../model/appointment');
const Cli = require('../model/clinic');
exports.getAppointment = async(req, res, next) => {
    try {
        let data = await Appointment.findAll({
            raw: true
        });

        res.status(200)
            .json(data);
    } catch (error) {
        res.status(500)
        .json({ "ERROR": error })

    }

};

exports.getAppoDate = async(req, res, next) => {
    try {
        let data = await Appointment.findAll({
            where: {
                AppointmentDate: req.params.date
            },
            raw: true
        });

        res.status(200)
            .json(data);
    } catch (error) {
        res.status(500)
        .json({ "ERROR": error })

    }

};

// store data to order table
exports.postAddAppointment = (req, res, next) => {
    //console.log(req.body);
    try {
        let body_data = {
            PatientId: req.body.PatientId,
            AppointmentDate: req.body.AppointmentDate,
            AppointmentTime: req.body.AppointmentTime,
            AppointmentTakenDate: req.body.AppointmentTakenDate,
            Status: req.body.Status,
            UserIdGiven: req.body.UserIdGiven,
            Prescription: req.body.Prescription,
            Fees: req.body.Fees
        }
        let = {
            PatientId,
            AppointmentDate,
            AppointmentTime,
            AppointmentTakenDate,
            Status,
            UserIdGiven,
            Prescription,
            Fees,
        } = body_data;

        Appointment.create({
            PatientId,
            AppointmentDate,
            AppointmentTime,
            AppointmentTakenDate,
            Status,
            UserIdGiven,
            Prescription,
            Fees,
        });
        res.status(201)
            .json({
                "msg": "Appointment data inserted"
            })
    } catch (error) {
        res.status(500)
            .json({ "ERROR": error })

    }

};

exports.getOneAppointment = async(req, res, next) => {
    try {
        let one_data = await Appointment.findOne({
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
exports.getUserApo = async(req, res, next) => {
    try {
        let one_data = await Appointment.findAll({
            where: {
                PatientId: req.params.id
            },
            raw: true
        });
        console.log(one_data);
        res.status(200)
            .json(one_data)

    } catch (error) {
        res.status(500)
            .json({ "error": error })
    }

};

exports.updateAppointment = (req, res, next) => {
    try {
        let body_data = {
            PatientId: req.body.PatientId,
            AppointmentDate: req.body.AppointmentDate,
            AppointmentTime: req.body.AppointmentTime,
            Status: req.body.Status,
            UserIdGiven: req.body.UserIdGiven,
            Prescription: req.body.Prescription,
            Fees: req.body.Fees,
        }
        let = {
            PatientId,
            AppointmentDate,
            AppointmentTime,
            Status,
            UserIdGiven,
            Prescription,
            Fees,
        } = body_data;
        Appointment.update({
            PatientId: PatientId,
            AppointmentDate: AppointmentDate,
            AppointmentTime: AppointmentTime,
            Status: Status,
            UserIdGiven: UserIdGiven,
            Prescription: Prescription,
            Fees: Fees,
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

exports.deleteAppointment = (req, res, next) => {
    try {
        Appointment.destroy({ where: { id: req.params.id } });
        res.status(200)
            .json({ "delete": "Appointment data deleted" })
    } catch (error) {
        res.status(500)
            .json({ "error": error })
    }
}

//apoiment user
exports.getUserOnhold = async(req, res, next) => {
    try {
        let one_data = await Appointment.findAll({
            where: {
                AppointmentDate:req.params.date,
                Status: "on hold"
            },
            raw: true
        });
        console.log(one_data);
        res.status(200)
            .json(one_data)

    } catch (error) {
        res.status(500)
            .json({ "error": error })
    }

};
exports.getUserArrive = async(req, res, next) => {
    try {
        let one_data = await Appointment.findAll({
            where: {
                AppointmentDate:req.params.date,
                Status: "Arrived"
            },
            raw: true
        });
        console.log(one_data);
        res.status(200)
            .json(one_data)

    } catch (error) {
        res.status(500)
            .json({ "error": error })
    }

};
exports.getUserCompleted = async(req, res, next) => {
    try {
        let one_data = await Appointment.findAll({
            where: {
                AppointmentDate:req.params.date,
                Status: "Completed"
            },
            raw: true
        });
        console.log(one_data);
        res.status(200)
            .json(one_data)

    } catch (error) {
        res.status(500)
            .json({ "error": error })
    }

};
//Total count user appoiment
exports.getCount = async(req, res, next) => {
    try {
        let online = '';
        let finish = '';
        let one_data = await Appointment.findAndCountAll({
            where: {

                Status: "on hold"
            },
            raw: true
        });
        console.log(one_data.count);
        online = one_data.count
        let deactive = await Appointment.findAndCountAll({
            where: {

                Status: "seen"
            },
            raw: true
        });
        console.log(deactive.count);
        finish = deactive.count;
        let sum = online + finish
        res.status(200)
            .json({ "online": online, "offline": finish, "sum": sum })

    } catch (error) {
        res.status(500)
            .json({ "error": error })
    }

};
//admin count
exports.getAdmin = async(req, res, next) => {
    try {
        let online = '';
        let finish = '';
        let one_data = await Appointment.findAndCountAll({
            where: {

                Status: "on hold"
            },
            raw: true
        });
        let one_data1 = await Appointment.findAndCountAll({
            where: {

                AppointmentTakenDate: "Take Appointment"
            },
            raw: true
        });
        console.log(one_data.count);
        online = one_data.count

        let clin = await Cli.findAndCountAll({

            raw: true
        });
        console.log(clin.count);

        res.status(200)
            .json({ "online": online, "c": clin.count, "on": one_data1.count })

    } catch (error) {
        res.status(500)
            .json({ "error": error })
    }

};

exports.CountAppointment = async(req,res,next) => {
    try{
        let online='';
        let offline='';
        let one_data = await Appointment.findAndCountAll({
            where: {
                Status: "on hold",
                AppointmentDate:req.params.date,
                AppointmentTakenDate:"Consult Offline",
            },
            raw: true
        });
        offline=one_data.count;
        let one_data1 = await Appointment.findAndCountAll({
            where: {
                Status: "on hold",
                AppointmentDate:req.params.date,
                AppointmentTakenDate:"Consult Online",
            },
            raw: true
        });
        online=one_data1.count;
        res.status(200)
            .json({ "online": online, "offline": offline})
    }catch (error) {
        res.status(500)
            .json({ "error": error })
    }
}

exports.cancelAppointment = (req, res, next) => {
    try {
        let body_data = {
            Status: "Cancelled",
        }
        let = {
            Status,
        }=body_data;
        Appointment.update({
            Status: Status,
        }, {
            where: {
                id: req.params.id,
                Status:"on hold"
            }
        });

        res.status(200)
            .json({ "msg": req.params.id });
    } catch (error) {
        res.status(500)
            .json({ "error": error })

    }
};

exports.arriveAppointment = (req, res, next) => {
    try {
        let body_data = {
            Status: "Arrived",
        }
        let = {
            Status,
        }=body_data;
        Appointment.update({
            Status: Status,
        }, {
            where: {
                id: req.params.id,
                Status:"on hold"
            }
        });

        res.status(200)
            .json({ "msg": req.params.id });
    } catch (error) {
        res.status(500)
            .json({ "error": error })

    }
};

exports.completeAppointment = (req, res, next) => {
    try {
        let body_data = {
            Status: "Completed",
        }
        let = {
            Status,
        }=body_data;
        Appointment.update({
            Status: Status,
        }, {
            where: {
                id: req.params.id,
                Status:"Arrived"
            }
        });

        res.status(200)
            .json({ "msg": req.params.id });
    } catch (error) {
        res.status(500)
            .json({ "error": error })

    }
};