const Like = require('../model/database').models.Like;

const { _create, _read, _update, _delete } = require('./crud');

// const addOne = async (req, res) => {
//     try {
//         let result = await Like.create(req.body);
//         return res.status(201).send(result);
//     } catch (error) {
//         next(err);
//     }
// }

// const deleteById = async (req, res, next) => {
//     try {
//         await Like.destroy({where: { id: req.params.id }})
//         return res.sendStatus(204);
//     } catch (err) {
//         next(err);
//     }
// }


const addOne = (req, res, next) => {
    return _create(Like, req, res, next, {})
}

const deleteById = (req, res, next) => {
    return _delete(Like, req, res, next, {})
}

module.exports = {
    addOne,
    deleteById,
}