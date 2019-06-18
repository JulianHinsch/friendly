const Sequelize = require('sequelize');

const database = new Sequelize(process.env.DATABASE_URL, {
    operatorsAliases: false, //fixes https://github.com/sequelize/sequelize/issues/8417 
});

const User = require('./schema/user')(database, Sequelize);
const Post = require('./schema/post')(database, Sequelize);
const _Comment = require('./schema/comment')(database, Sequelize);
const Follow = require('./schema/follow')(database, Sequelize);
const Reaction = require('./schema/Reaction')(database, Sequelize);
const Message = require('./schema/message')(database, Sequelize);
const Conversation = require('./schema/conversation')(database, Sequelize);

User.hasMany(Post, { as: 'posts', foreignKey: 'userId', targetKey: 'id' });
User.hasMany(_Comment, { foreignKey: 'userId', targetKey: 'id' });
User.hasMany(Reaction, { foreignKey: 'userId', targetKey: 'id' });
User.hasMany(Message, { foreignKey: 'userId', targetKey: 'id' });

Post.belongsTo(User, { onDelete: 'CASCADE' });
Post.hasMany(_Comment, { as: 'comments', foreignKey: 'postId', targetKey: 'id' });
Post.hasMany(Reaction, { as: 'reactions', foreignKey: 'postId', targetKey: 'id' });

_Comment.belongsTo(Post, { onDelete: 'CASCADE' });
_Comment.belongsTo(User, { onDelete: 'CASCADE' });

Reaction.belongsTo(Post, { onDelete: 'CASCADE' });
Reaction.belongsTo(User, { onDelete: 'CASCADE' });

Conversation.hasMany(Message, { foreignKey: 'conversationId', targetKey: 'id'});

Message.belongsTo(User, { onDelete: 'CASCADE' });
Message.belongsTo(Conversation, { onDelete: 'CASCADE' });

const sync = () => database.sync({ force: true });


const seed = () => {
    return sync()
    .then(async () => {
        const users = [
            {
                email: 'jhinsch799@gmail.com',
                password: 'temp',
                name: 'Julian Hinsch',
            },
            {
                email: 'jane.doe@gmail.com',
                password: 'temp',
                name: 'Jane Doe',
            },
            {
                email: 'john.doe@gmail.com',
                password: 'temp',
                name: 'John Doe',
            },
        ];
        const seedUsers = users.map(async user => {
            const passwordHash = await User.prototype.generateHash(user.password)            
            User.create({
                email: user.email,
                name: user.name,
                passwordHash: passwordHash,
            });
        });
        return Promise.all(seedUsers);
    })
    .then(() => {
        const posts = [
            {
                userId: 1,
                text: "Hi, I'm Julian!",
            },
            {
                userId: 1,
                text: "This is my second post!",
            },
            {
                userId: 2,
                text: "Hi, I'm Jane!",
            },
            {
                userId: 2,
                text: "Check out this <a href='https://nytimes.com' rel='noopener noreferrer'>cool article</a>!",
            },
            {
                userId: 3,
                text: "Hi, I'm John!",
            },
        ]
        const seedPosts = posts.map(post => {
            Post.create(post)
        });
        return Promise.all(seedPosts);
    })
    .then(() => {
        const comments = [
            {
                postId: 1,                
                userId: 2,
                text: "Hi Julian!",
            },
            {
                postId: 1,
                userId: 1,
                text: "Hey Jane!",
            },
            {
                postId: 2,                
                userId: 1,
                text: "Killin it!",
            },
            {
                postId: 3,                
                userId: 1,
                text: "Hey Jane!",
            },
            {
                postId: 3,                
                userId: 3,
                text: "What's up Jane!",
            },
            {
                postId: 4,                
                userId: 1,
                text: "This sucks!",
            },
            {
                postId: 5,     
                userId: 2,
                text: "Hi John!",
            },
        ]
        const seedComments = comments.map(comment => {
            _Comment.create(comment)
        });
        return Promise.all(seedComments)
    })
    .then(() => {
        const reactions = [
            {
                userId: 2,
                postId: 1,
            },
            {
                userId: 3,
                postId: 1,
            },
            {
                userId: 1,
                postId: 3,
            },
            {
                userId: 1,
                postId: 4,
            },
            {
                userId: 3,
                postId: 2,
            },
            {
                userId: 3,
                postId: 3,
            },
            {
                userId: 3,
                postId: 4,
            },
        ]
        const seedReactions = reactions.map(reaction => {
            Reaction.create(reaction)
        });
        return Promise.all(seedReactions)
    })
    .then(() => {
        const follows = [
            {
                followerId: 1,
                followsId: 2,
                isApproved: true,
            },
            {
                followerId: 1,
                followsId: 3,
                isApproved: true,
            },
            {
                followerId: 2,
                followsId: 1,
                isApproved: true,
            },
            {
                followerId: 3,
                followsId: 1,
                isApproved: false,
            },
            {
                followerId: 3,
                followsId: 2,
                isApproved: true,
            },
        ]
        const seedFollows = follows.map(follow => {
            Follow.create(follow);
        });
        return Promise.all(seedFollows);
    })

    // .then(() => {
    //     const conversations = [

    //     ]
    //     const seedConversations = conversations.map(conversation => {
    //         Conversation.create({
                
    //         });
    //     })
    //     return Promise.all(seedConversations);
    // })
    // .then(() => {
    //     const messages = [

    //     ]
    //     const seedMessages = messages.map(message => {
    //         Message.create({
                
    //         });
    //     });
    //     return Promise.all(seedMessages);
    // })
}


module.exports = {
    models: {
        _Comment,
        Follow,
        Reaction,
        Post,
        User,
        Message,
        Conversation
    },
    sync,
    seed,
};