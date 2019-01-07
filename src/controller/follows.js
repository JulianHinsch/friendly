const Follow = require('../model/database.js').models.Follow;

const addOne = async (req, res, next) => {
    try {
        let result = await Follow.create(req.body);
        return res.status(201).send(result);      
    } catch (err) {
        next(err);
    }
}

const deleteByUserIds = async (req, res, next) => {
    try {
        await Follow.destroy({
            where: {
                followerUserId: req.query.followerUserId,
                followsUserId: req.query.followsUserId,
            }
        })
        return res.sendStatus(204);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    addOne,
    deleteByUserIds,
}