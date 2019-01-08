const Sequelize = require('sequelize');

const database = new Sequelize(process.env.DATABASE_URL, {
    operatorsAliases: false, //fixes https://github.com/sequelize/sequelize/issues/8417 
});

const _Comment = require('./schemas/comment')(database, Sequelize);
const Follow = require('./schemas/follow')(database, Sequelize);
const Like = require('./schemas/like')(database, Sequelize);
const Post = require('./schemas/post')(database, Sequelize); //Comment is a reserved word in JS
const User = require('./schemas/user')(database, Sequelize);

User.hasMany(Post, { as: 'posts', foreignKey: 'userId', targetKey: 'id' });
User.hasMany(_Comment, { foreignKey: 'userId', targetKey: 'id' });
User.hasMany(Like, { foreignKey: 'userId', targetKey: 'id' });
Post.belongsTo(User, { onDelete: 'CASCADE'});
Post.hasMany(_Comment, {as: 'comments', foreignKey: 'postId', targetKey: 'id' });
Post.hasMany(Like, { as: 'likes', foreignKey: 'postId', targetKey: 'id' });
_Comment.belongsTo(Post, { onDelete: 'CASCADE' });
_Comment.belongsTo(User, { onDelete: 'CASCADE' });
Like.belongsTo(Post, { onDelete: 'CASCADE' });
Like.belongsTo(User, { onDelete: 'CASCADE' });

const sync = () => database.sync({ force: true });

module.exports = {
    models: {
        _Comment,
        Follow,
        Like,
        Post,
        User,
    },
    sync,
};