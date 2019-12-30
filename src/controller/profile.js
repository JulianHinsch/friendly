const Op = require('sequelize').Op;
const {
    User,
    Post,
    _Comment,
    Reaction,
    Follow
} = require('../model/database').models;

const _get = async(req,res,next) => {
    const limit = req.query.limit === 'null' || req.query.limit === 'undefined' ? null : req.query.limit;
    const offset = req.query.offset === 'null' || req.query.offset === 'undefined' ? null : req.query.offset;

    try {
        // get user
        const user = await User.findByPk(req.params.userId, {
            attributes: ['id', 'name', 'emailHash'],
        });
        // get all user's follows/followers
        const followArr = await Follow.findAll({
            where: {
                    [Op.or]: {
                        userId: req.params.userId,
                        followsId: req.params.userId,
                    },
            },
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: [ 'id', 'name', 'emailHash' ],
                },
            ],
        });
        // get user's posts
        const postArr = await Post.findAll({
            limit,
            offset,
            where: {
                userId: req.params.userId,
            },
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'name', 'emailHash']
                },
                {
                    model: Reaction,
                    as: 'reactions',
                    include: {
                        model: User,
                        as: 'user',
                        attributes: ['id', 'name', 'emailHash']
                    }
                },
                {
                    model: _Comment,
                    as: 'comments',
                    include: {
                        model: User,
                        as: 'user',
                        attributes: [ 'id', 'name', 'emailHash'],
                    },
                },
            ],
            order: [
                ['updatedAt', 'DESC'],
            ],
        });
        return res.status(200).send({
            user: user,
            follows: followArr,
            posts: postArr
        });
    } catch (err) {
        next(err);
    }
}

module.exports = { _get };