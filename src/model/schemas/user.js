const bcrypt = require('bcrypt-nodejs');

module.exports = (database, DataTypes) => {
    const User = database.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            foreignKey: true,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        }
    }, {
        timestamps: true,
    });

    /* instance level methods */

    User.prototype.generateHash = (password) => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };
    
    User.prototype.validPassword = (password) => {
        return bcrypt.compareSync(password, this.password);    
    }

    return User;
}


