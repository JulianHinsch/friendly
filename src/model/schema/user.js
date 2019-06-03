const bcrypt = require('bcryptjs');

module.exports = (database, DataTypes) => {
    const User = database.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        timestamps: true,
    });

    /* instance level methods */

    User.prototype.generateHash = function(password) {
        return new Promise(function(resolve, reject) {
            bcrypt.genSalt(8, function(err, salt) {
                if (err) {
                    reject(err);
                } else {
                    bcrypt.hash(password, salt, function(err, hash) {
                        if(err) {
                            reject(err);
                        } else {
                            resolve(hash);
                        }
                    });
                }
            });
        });
    }

    User.prototype.checkPassword = function(password) {
        const passwordHash = this.passwordHash;
        console.log(passwordHash);
        return new Promise(function(resolve, reject) {
            bcrypt.compare(password, passwordHash, (err, success) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(success);
                }
            });   
        });
        
    }

    return User;
}


