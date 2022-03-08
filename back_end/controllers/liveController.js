const live = require('../model/live');
exports.getWatingTime = async(req, res, next) => {
    try {
        let data = await live.findAll({
            order: [
                ["createdAt", "DESC"]
            ],
            limit: 1,
            raw: true
        });

        res.status(200)
            .json(data);
    } catch (error) {

        res.status(500)
            .json({ "error": error })

    }

};

exports.postTime = async(req, res, next) => {
    try {
        let = {
            wtime
        } = req.body
        live.create({
            wtime
        })

        res.status(201)
            .json({ "msg": "insert data" });
    } catch (error) {

        res.status(500)
            .json({ "error": error })

    }

};