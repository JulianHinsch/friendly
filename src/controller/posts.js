const Post = require('../model/database').models.Post;
const Follow= require('../model/database').models.Follow;
const _Comment = require('../model/database').models._Comment
const Like = require('../model/database').models.Like


const loadMany = async (req, res, next) => {
    const options = {};
    if(req.params.userid) {
        options.where = {
            userId: req.params.userid,
        }
    }
    try {
        let result = await Post.findAll({
            limit: 50, 
            ...options,
        });
        return res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

const loadOne = async (req, res, next) => {
    try {
        let result = Post.findOne({
            where: {
                id: req.params.id,
            },
            include: {

            }
        });
        return res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

const addOne = async (req, res) => {
    try {
        let result = await Post.create(req.body);
        return res.status(201).send(result);
    } catch (err) {
        next(err);
    }
}

const deleteById = async (req, res, next) => {
    try {
        await Post.destroy({where: { id: req.params.id }})
        return res.sendStatus(204);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    loadMany,
    loadOne,
    addOne,
    deleteById
}