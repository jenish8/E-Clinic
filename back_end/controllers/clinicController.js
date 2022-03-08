const Clinic = require('../model/clinic');
exports.getClinic = async(req, res, next) => {
    try {
        let data = await Clinic.findAll({
            raw: true
        });

        res.status(201)
            .json(data);
    } catch (error) {

        res.status(500)
            .json({ "error": error })

    }

};

// store data to clinic table
exports.postAddClinic = (req, res, next) => {
    try {
        let body_data = {
            ClinicName: req.body.ClinicName,
            Address: req.body.Address,
            ContactNo: req.body.ContactNo,
            AboutUs: req.body.AboutUs,
            NewPatientFees: req.body.NewPatientFees,
            OldPatientFees: req.body.OldPatientFees,
            VideoConsultationFees: req.body.VideoConsultationFees,
            drname: req.body.drname,
            IsDeleted: '1'
        }
        let = {
            ClinicName,
            Address,
            ContactNo,
            AboutUs,
            NewPatientFees,
            OldPatientFees,
            VideoConsultationFees,
            drname,
            IsDeleted,
        } = body_data;

        Clinic.create({
            ClinicName,
            Address,
            ContactNo,
            AboutUs,
            NewPatientFees,
            OldPatientFees,
            VideoConsultationFees,
            drname,
            IsDeleted,
        });
        res.status(201)
            .json({
                "msg": "clinic inserted"
            })
    } catch (error) {
        res.status(500)
            .json({ "ERROR": error })

    }

};

exports.getOneClinic = async(req, res, next) => {
    try {
        let one_data = await Clinic.findOne({
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

exports.updateClinic = (req, res, next) => {
    try {
        let body_data = {
            ClinicName: req.body.ClinicName,
            Address: req.body.Address,
            ContactNo: req.body.ContactNo,
            AboutUs: req.body.AboutUs,
            NewPatientFees: req.body.NewPatientFees,
            OldPatientFees: req.body.OldPatientFees,
            VideoConsultationFees: req.body.VideoConsultationFees,
            IsDeleted: '1'
        }
        let = {
            ClinicName,
            Address,
            ContactNo,
            AboutUs,
            NewPatientFees,
            OldPatientFees,
            VideoConsultationFees,
            IsDeleted,
        } = body_data;
        Clinic.update({
            ClinicName,
            Address,
            ContactNo,
            AboutUs,
            NewPatientFees,
            OldPatientFees,
            VideoConsultationFees,
            IsDeleted,
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

exports.deleteClinic = (req, res, next) => {
    try {
        Clinic.destroy({ where: { id: req.params.id } });
        res.status(200)
            .json({ "delete": "clinic deleted" })
    } catch (error) {
        res.status(500)
            .json({ "error": error })
    }
};

exports.TempDeleteClinic = (req, res, next) => {
    try {
        Clinic.update({
            IsDeleted: '0',
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200)
            .json({ "delete": "Temperory clinic deleted" })
    } catch (error) {
        res.status(500)
            .json({ "error": error })
    }
}

exports.RegainClinic = (req, res, next) => {
    try {
        Clinic.update({
            IsDeleted: '1',
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200)
            .json({ "delete": "Clinic regained" })
    } catch (error) {
        res.status(500)
            .json({ "error": error })
    }
}