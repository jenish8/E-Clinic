const UserDate = require('../model/date');

exports.getAllDate = (req, res, next) => {
    try {
        let data = UserDate.findAll({
            raw:true
        })
        res.status(200)
        .json({"msg":"get query"})
    } catch (error) {
        res.status(500)
        .json({"msg":error})
    }
}

exports.postUserSelectDateTime = (req, res, next) => {
    try {
        let = {
            user_select_date,
            t_id = req.params.id,
            status = "no"
        } = req.body
        UserDate.create({
            user_select_date,
            t_id,
            status 
        })
        res.status(201)
        .json({"msg":user_select_date})
    } catch (error) {
        res.status(500)
        .json({"error":error})
    }
}