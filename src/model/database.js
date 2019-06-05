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
                id: 1,
                email: 'jhinsch799@gmail.com',
                password: 'temp',
                name: 'Julian Hinsch',
                phone: '6097212326',  
            },
            {
                id: 2,
                email: 'jane.doe@gmail.com',
                password: 'temp',
                name: 'Jane Doe',
                phone: '7777777777', 
            },
            {
                id: 3,
                email: 'john.doe@gmail.com',
                password: 'temp',
                name: 'John Doe',
                phone: '6666666666', 
            },
        ];
        const seedUsers = users.map(async user => {
            const passwordHash = await User.prototype.generateHash(user.password)            
            User.create({
                id: user.id,
                email: user.email,
                name: user.name,
                phone: user.phone,                
                passwordHash: passwordHash,
            });
        });
        return Promise.all(seedUsers);
    })
    .then(() => {
        const posts = [
            {
                id: 1,
                userId: 1,
                text: "Hi, I'm Julian!",
            },
            {
                id: 2, 
                userId: 1,
                text: "This is my second post!",
            },
            {
                id: 3,
                userId: 2,
                text: "Hi, I'm Jane!",
            },
            {
                id: 4,
                userId: 2,
                text: "Check out this <a href='nytimes.com' ref='noopener norefferer'>cool article</a>!",
            },
            {
                id: 5,
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
                id: 1,
                postId: 1,                
                userId: 2,
                text: "Hi Julian!",
            },
            {
                id: 2,
                postId: 1,
                userId: 1,
                text: "Hey Jane!",
            },
            {
                id: 3,
                postId: 2,                
                userId: 1,
                text: "Killin it!",
            },
            {
                id: 4,
                postId: 3,                
                userId: 1,
                text: "Hey Jane!",
            },
            {
                id: 5,
                postId: 3,                
                userId: 3,
                text: "What's up Jane!",
            },
            {
                id: 6,
                postId: 4,                
                userId: 1,
                text: "This sucks!",
            },
            {
                id: 7,
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
                id: 1,
                userId: 2,
                postId: 1,
            },
            {
                id: 2,
                userId: 3,
                postId: 1,
            },
            {
                id: 3,
                userId: 1,
                postId: 3,
            },
            {
                id: 4,
                userId: 1,
                postId: 4,
            },
            {
                id: 5,
                userId: 3,
                postId: 2,
            },
            {
                id: 6,
                userId: 3,
                postId: 3,
            },
            {
                id: 7,
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
                id: 1,
                followerId: 1,
                followsId: 2,
                isApproved: true,
            },
            {
                id: 2,
                followerId: 1,
                followsId: 3,
                isApproved: true,
            },
            {
                id: 3,
                followerId: 2,
                followsId: 1,
                isApproved: true,
            },
            {
                id: 4,
                followerId: 3,
                followsId: 1,
                isApproved: false,
            },
            {
                id: 5,
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