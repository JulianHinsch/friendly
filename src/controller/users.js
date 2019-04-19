const User = require('../model/database').models.User;

const loadOne = async (req, res, next) => {
    try {
        let result = await User.findOne({
            where: {
                userid: req.params.userid,
            }
        });
        return res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

const loadMany = async (req, res, next) => {
    const options = {};
    if(req.params.q) {
        options.where = {
            name: {
                $like: `%req.params.q%`
            }
        }
    }
    try {
        let result = await User.findAll({
            limit: 50, 
            ...options
        });
        return res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

const addOne = async (req, res, next) => {
    try {
        let result = await User.create(req.body);
        return res.status(201).send(result);
    } catch (err) {
        next(err);
    }
}

const updateById = async (req, res) => {
    try {
        await User.update(req.body, {where: { id: req.params.id }, returning: true});
        return res.sendStatus(204);
    } catch (err) {
        next(err);
    }
}

const deleteById = async (req, res, next) => {
    try {
        await User.destroy({where: { id: req.params.id }})
        return res.sendStatus(204);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    loadOne,
    loadMany,
    addOne,
    updateById,
    deleteById,
}