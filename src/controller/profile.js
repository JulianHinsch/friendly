const { User, Post, _Comment, Reaction, Follow } = require('../model/database').models;
const Op = require('sequelize').Op;

const _get = async(req,res,next) => {
    const limit = req.query.limit === 'null' || req.query.limit === 'undefined' ? null : req.query.limit;
    const offset = req.query.offset === 'null' || req.query.offset === 'undefined' ? null : req.query.offset;
    try {
        // get all follows/followers
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
        // get user and posts
        const users = await User.findByPk(req.params.userId, {
            attributes: ['id', 'name', 'emailHash'],
            include: [
                {
                    model: Post,
                    as: 'posts',
                    limit,
                    offset,
                    include: [
                        {
                            model: _Comment,
                            as: 'comments',
                            include: {
                                model: User,
                                as: 'user',
                                attributes: [ 'id', 'name', 'emailHash'],
                            },
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
                            model: User,
                            as: 'user',
                            attributes: ['id', 'name', 'emailHash']
                        }
                    ]
                },
                {
                    model: Follow,
                    as: 'follows',
                    include: {
                        model: User,
                        as: 'user',
                        attributes: ['id', 'name', 'emailHash'],
                    },
                    where: {
                        [Op.or]: {
                            userId: req.params.userId,
                            followsId: req.params.userId,
                        }
                    },
                    required: false,
                }
            ],
        });
        return res.status(200).send({ users: [ users ], follows: followArr });
    } catch (err) {
        next(err);
    }
}

module.exports = { _get };