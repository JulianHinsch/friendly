const User = require('../model/database').models.User;

const _get = async (req, res, next) => {
    try {
        const limit = req.query.limit || 25;
        const offset = req.query.offset || 0;
        const result = await User.findAll({
            limit,
            offset
        });
        return res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

const _delete = async (req, res, next) => {
    try {
        const result = await User.destroy({
            where: { id: req.params.id },
        }, {
            returning: true,
            plain: true,
        });
        return res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    _get,
    _delete,
}