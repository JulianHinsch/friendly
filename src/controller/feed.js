const { User, Post, _Comment, Reaction, Follow } = require('../model/database').models;

const _get = async(req,res,next) => {
    const limit = req.query.limit || 20;
    const offset = req.query.offset || 0;
    try {
        const followArr = await Follow.findAll({
            where: {
                userId: req.params.userId,
            },
            attributes: [ 'followsId' ],
        });
        const followIdArr = followArr.map(follow => follow.followsId);
        const result = await Post.findAll({
            limit,
            offset,
            where: {
                userId: followIdArr
            },
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
                    attributes: [ 'id', 'name', 'emailHash' ],
                }
            ]
        });
        return res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

module.exports = { _get };