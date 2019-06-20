const bcrypt = require('bcryptjs');
const md5 = require('md5');

module.exports = (database, DataTypes) => {
    const User = database.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        timestamps: true,
    });

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

    //TODO
    //this only works when we query the User model directly - but not in joins
    User.prototype.toJSON = function () {
        const values = { ...this.get() };
        delete values.passwordHash;
        values.emailHash = md5(values.email);
        delete values.email;        
        return values;
    }

    return User;
}


