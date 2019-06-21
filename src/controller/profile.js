const { User, Post, _Comment, Reaction, Follow } = require('../model/database').models;

const _get = async(req,res,next) => {
    const limit = req.query.limit === 'null' || req.query.limit === 'undefined' ? null : req.query.limit;
    const offset = req.query.offset === 'null' || req.query.offset === 'undefined' ? null : req.query.offset;
    try {
        const result = await User.findByPk(req.params.userId, {
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
                        }
                    ]
                },
                { 
                    model: Follow,
                    as: 'follows',
                    include: {
                        model: User,
                        as: 'user',
                        attributes: ['id', 'name', 'emailHash']
                    }
                }
            ],
        });
        return res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

module.exports = { _get };