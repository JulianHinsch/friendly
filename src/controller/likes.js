const Like = require('../model/database').models.Like;

const addOne = async (req, res) => {
    try {
        let result = await Like.create(req.body);
        return res.status(201).send(result);
    } catch (error) {
        next(err);
    }
}

const deleteById = async (req, res, next) => {
    try {
        await Like.destroy({where: { id: req.params.id }})
        return res.sendStatus(204);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    addOne,
    deleteById,
}