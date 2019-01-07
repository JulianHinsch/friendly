const Sequelize = require('sequelize');

const database = new Sequelize(process.env.DATABASE_URL, {
    operatorsAliases: false,
});

const User = require('./schemas/user')(database, Sequelize);
const Follow = require('./schemas/follow')(database, Sequelize);
const Post = require('./schemas/post')(database, Sequelize); //Comment is a reserved word in JS
const _Comment = require('./schemas/comment')(database, Sequelize);
const Like = require('./schemas/like')(database, Sequelize);

User.hasMany(Post, { as: 'posts', foreignKey: 'userId', targetKey: 'id' });
Post.belongsTo(User, { onDelete: 'CASCADE'});
Post.hasMany(_Comment, {as: 'comments', foreignKey: 'postId', targetKey: 'id' });
_Comment.belongsTo(Post, { onDelete: 'CASCADE' });
Post.hasMany(Like, { as: 'likes', foreignKey: 'postId', targetKey: 'id' });
Like.belongsTo(Post, { onDelete: 'CASCADE' });

const sync = () => database.sync({ force: true });

const seed = () => {
    // return sync().then(() => {
    //     let seedPollData = polls.map(poll => Poll.create({
    //         id: poll.id,
    //         question: poll.question,
    //     }));
    //     return Promise.all(seedPollData).then(() => {
    //         let seedOptionData = options.map(option => Option.create({
    //             id: option.id,
    //             answer: option.answer,
    //             votes: option.votes,
    //             pollId: option.pollId,
    //         }));
    //         return Promise.all(seedOptionData);
    //     });
    // });
};

module.exports = {
  models: {
    User, 
    Post,
    _Comment,
    Like,
  },
  sync,
  seed,
};