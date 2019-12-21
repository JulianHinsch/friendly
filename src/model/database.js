const Sequelize = require('sequelize');

const database = new Sequelize(process.env.DATABASE_URL, {
    operatorsAliases: false, // fixes https://github.com/sequelize/sequelize/issues/8417
});

const User = require('./schema/user')(database, Sequelize);
const Post = require('./schema/post')(database, Sequelize);
const _Comment = require('./schema/comment')(database, Sequelize);
const Reaction = require('./schema/Reaction')(database, Sequelize);
const Follow = require('./schema/follow')(database, Sequelize);
// const Message = require('./schema/message')(database, Sequelize);
// const Conversation = require('./schema/conversation')(database, Sequelize);

const seedData = require('./seed');

User.hasMany(Post, { as: 'posts', foreignKey: 'userId', targetKey: 'id' });
User.hasMany(_Comment, { as: 'comments', foreignKey: 'userId', targetKey: 'id' });
User.hasMany(Reaction, { as: 'reactions', foreignKey: 'userId', targetKey: 'id' });
User.hasMany(Follow, { as: 'follows', foreignKey: 'userId', targetKey: 'id'});
//User.hasMany(Follow, { as: 'followers', foreignKey: 'followsId', targetKey: 'id'});

//User.hasMany(Message, { as: 'messages', foreignKey: 'userId', targetKey: 'id' });

Post.belongsTo(User, { onDelete: 'CASCADE' });
Post.hasMany(_Comment, { as: 'comments', foreignKey: 'postId', targetKey: 'id' });
Post.hasMany(Reaction, { as: 'reactions', foreignKey: 'postId', targetKey: 'id' });

_Comment.belongsTo(Post, { onDelete: 'CASCADE' });
_Comment.belongsTo(User, { onDelete: 'CASCADE' });

Reaction.belongsTo(Post, { onDelete: 'CASCADE' });
Reaction.belongsTo(User, { onDelete: 'CASCADE' });

//Follow.belongsToMany(User, { through: 'UsersFollows', onDelete: 'CASCADE' });
Follow.belongsTo(User, { onDelete: 'CASCADE' });


// Conversation.hasMany(Message, { foreignKey: 'conversationId', targetKey: 'id'});

// Message.belongsTo(User, { onDelete: 'CASCADE' });
// Message.belongsTo(Conversation, { onDelete: 'CASCADE' });

const sync = () => database.sync({ force: true });

const seed = () => {
    return sync()
        .then(async () => {
            return Promise.all(seedData.users.map(async user => {
                const emailHash = await User.prototype.generateEmailHash(user.email)
                const passwordHash = await User.prototype.generatePasswordHash(user.password);
                User.create({
                    email: user.email,
                    emailHash: emailHash,
                    name: user.name,
                    passwordHash: passwordHash,
                });
            }));
        })
        .then(() => {
            return Promise.all([
                ...seedData.posts.map(post => {
                    Post.create(post);
                }),
                ...seedData.comments.map(comment => {
                    _Comment.create(comment);
                }),
                ...seedData.reactions.map(reaction => {
                    Reaction.create(reaction);
                }),
                ...seedFollows.map(follow => {
                    Follow.create(follow);
                }),
                // ...seedMessages.map(message => {
                //     Message.create(message);
                // }),
                // ...seedConversations.map(conversation => {
                //     conversation.create(Conversation);
                // }),
            ])
        })
}

module.exports = {
    models: {
        _Comment,
        Follow,
        Reaction,
        Post,
        User,
        // Message,
        // Conversation
    },
    sync,
    seed,
};