const Post = require('../model/database').models.Post;

const _create = async (req, res, next) => {
    try {
        const result = await Post.create(req.body);
        return res.status(201).send(result);
    } catch (err) {
        next(err);
    }
}

const _get = async (req, res, next) => {
    try {
        const limit = req.query.limit || 25;
        const offset = req.query.offset || 0;
        const result = await Post.findAll({
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
        const result = await Post.destroy({
            where: { id: req.params.id },
        }, {
            returning: true,
            plain: true,
            ...options
        })
        return res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    _create,
    _get,
    _delete,
}