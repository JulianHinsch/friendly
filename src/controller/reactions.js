const Reaction = require('../model/database').models.Reaction;

const _create = async (req, res, next) => {
    try {
        const result = await Reaction.create(req.body);
        return res.status(201).send(result);
    } catch (err) {
        next(err);
    }
}

const _delete = async (req, res, next) => {
    try {
        const result = await Reaction.destroy({
            where: { id: req.params.id },
            returning: true,
            plain: true,
        });
        return res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    _create,
    _delete
}