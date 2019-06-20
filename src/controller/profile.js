const { User, Post, _Comment, Reaction, Follow } = require('../model/database').models;

const _get = async(req,res,next) => {
    const limit = req.query.limit || 20;
    const offset = req.query.offset || 0;
    try {
        const result = await User.findByPk(req.params.userId, {
            limit,
            offset,
            include: [
                { 
                    model: Post,
                    as: 'posts',
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