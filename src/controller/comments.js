const _Comment = require('../model/database.js').models._Comment;

const addOne = async (req, res, next) => {
    try {
        let result = await _Comment.create(req.body);
        return res.status(201).send(result);      
    } catch (err) {
        next(err);
    }
}

const deleteById = async (req, res, next) => {
    try {
        await _Comment.destroy({where: { id: req.params.id }})
        return res.sendStatus(204);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    addOne,
    deleteById
}