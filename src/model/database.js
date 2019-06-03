const Sequelize = require('sequelize');

const database = new Sequelize(process.env.DATABASE_URL, {
    operatorsAliases: false, //fixes https://github.com/sequelize/sequelize/issues/8417 
});

const _Comment = require('./schema/comment')(database, Sequelize);
const Follow = require('./schema/follow')(database, Sequelize);
const Reaction = require('./schema/Reaction')(database, Sequelize);
const Post = require('./schema/post')(database, Sequelize); //Comment is a reserved word in JS
const User = require('./schema/user')(database, Sequelize);

User.hasMany(Post, { as: 'posts', foreignKey: 'userId', targetKey: 'id' });
User.hasMany(_Comment, { foreignKey: 'userId', targetKey: 'id' });
User.hasMany(Reaction, { foreignKey: 'userId', targetKey: 'id' });
Post.belongsTo(User, { onDelete: 'CASCADE' });
Post.hasMany(_Comment, {as: 'comments', foreignKey: 'postId', targetKey: 'id' });
Post.hasMany(Reaction, { as: 'reactions', foreignKey: 'postId', targetKey: 'id' });
_Comment.belongsTo(Post, { onDelete: 'CASCADE' });
_Comment.belongsTo(User, { onDelete: 'CASCADE' });
Reaction.belongsTo(Post, { onDelete: 'CASCADE' });
Reaction.belongsTo(User, { onDelete: 'CASCADE' });

const sync = () => database.sync({ force: true });


const seed = () => {
    return sync().then(async () => {
        const users = [
            {
                email: 'jhinsch799@gmail.com',
                password: 'temp',
                name: 'Julian Hinsch',
                phone: '6097212326',  
            },
        ];
        const seedUsers = users.map(async user => {
            const passwordHash = await User.prototype.generateHash(user.password)            
            User.create({
                email: user.email,
                name: user.name,
                phone: user.phone,                
                passwordHash: passwordHash,
            });
        });
        Promise.all(seedUsers);
    });
}


module.exports = {
    models: {
        _Comment,
        Follow,
        Reaction,
        Post,
        User,
    },
    sync,
    seed,
};