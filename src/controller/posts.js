const Post = require('../model/database').models.Post;

const _create = async (req, res, next) => {
    try {
        const result = await Post.create(req.body);
        return res.status(201).send(result);
    } catch (err) {
        next(err);
    }
}

const _delete = async (req, res, next) => {
    try {
        await Post.destroy({
            where: { id: req.params.id },
        });
        return res.sendStatus(200);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    _create,
    _delete,
}