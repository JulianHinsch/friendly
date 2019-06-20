const User = require('../model/database').models.User;
const { iLike } = require('sequelize').Op;

const handleSearch = async (req, res, next) => {
    const limit = req.query.limit || 20;
    const offset = req.query.offset || 0;
    const query = req.query.q;
    try {
        let result = await User.findAll({
            where: {
                //iLike is case insensitive
                name: { [iLike]: `%${query}%` }
            },
            limit,
            offset,
        });
        return res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    handleSearch,
}