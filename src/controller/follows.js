const Follow = require('../model/database.js').models.Follow;

const _create = async (req, res, next) => {
    try {
        let result = await Follow.create(req.body);
        return res.status(201).send(result);      
    } catch (err) {
        next(err);
    }
}

const _update = async (req, res, next) => {
    try {
        const result = await Follow.update(req.body, {
            where: { id: req.params.id },
            returning: true,
            plain: true,
        });
        return res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

const _delete = async (req, res, next) => {
    try {
        const result = await Follow.destroy({
            where: { id: req.params.id },
            returning: true,
            plain: true,
        })
        return res.status(204).send(result);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    _create,
    _update,
    _delete,
}