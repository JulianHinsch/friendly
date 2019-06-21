const User = require('../model/database').models.User;
const { iLike } = require('sequelize').Op;

const handleSearch = async (req, res, next) => {
    const limit = req.query.limit === 'null' || req.query.limit === 'undefined' ? null : req.query.limit;
    const offset = req.query.offset === 'null' || req.query.offset === 'undefined' ? null : req.query.offset;
    const query = req.query.q;
    try {
        let result = await User.findAll({
            where: {
                name: { [iLike]: `%${query}%` }
            },
            limit,
            offset,
            attributes: [ 'id', 'name', 'emailHash' ],
        });
        return res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    handleSearch,
}