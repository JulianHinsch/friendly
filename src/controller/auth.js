const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const atob = require('atob');

const User = require('../model/database').models.User;

const validatePassword = (password) => {
    if(/\s/g.test(password)) return false; //whitespace    
    if(password.length < 12) return false; //too short
    if(password.length > 50) return false; //too long
    if(password.toUpperCase() === password) return false; //no lowercase
    if(password.toLowerCase() === password) return false; //no uppercase
    if(!/\d/.test(password)) return false; //no number
    if(!/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(password)) return false; //no special char
    return true;
}

const validateEmail = (email) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

const validateUsername = (username) => {
    if(/\s/g.test(username)) return false; //whitespace
    if(username.length < 3) return false; //too short
    if(username.length > 50) return false; //too long
    if(/[!$%^&*()+|~=`{}\[\]:";'<>?,.\/]/.test(username)) return false; //has special char not allowed
    return true;
}

//helper functions to keep things DRY

const badRequest = (res) => {
    return res.status(400).json({
        success: false,
        message: 'Authentication failed! Please check the request',
    });
}

const badCreds = (res) => {
    return res.status(403).json({
        success: false,
        message: 'Invalid username or password',
    });
}

const checkToken = (req, res, next) => {

    const token = req.cookies['access_token'];

    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, {
            algorithms: ['HS256'],
            audience: 'node-token-auth-client',
            issuer: 'node-token-auth-server',
            maxAge: '7d',
        }, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).json({
            success: false,
            message: 'Auth token is not supplied. You may need to log in.'
        });
    }
};

const logout = (req, res, next) => {
    return res
        .status(200)
        .cookie('access_token', null, {
            maxAge: 0,
            overwrite: true,
        }).json({
            success: true,
        })
    next();
}

const login = async (req, res, next) => {

    const { email, password } = req.body;

    if(!email || !password) {
        return badRequest(res);
    }

    try {

        const user = await User.findOne({ where: { email: email }});
        if(!user) {
            return badCreds(res);
        }

        const isValid = await user.checkPassword(password);

        if(!isValid) {
            return badCreds(res);
        }

        const token = jwt.sign(
            { 
                email: user.email,
                role: user.role,
            },
            process.env.SECRET_KEY,
            { 
                expiresIn: '7d',
                audience: 'node-token-auth-client',
                issuer: 'node-token-auth-server',
                subject: user.email,
            }
        );
        /* this yields a token of format header.payload.signature, 
        where public claims (i.e. aud, iss, sub) and private claims (i.e. username, role) all go in payload */
        //password accepted
        return res
            .status(200)
            .cookie('access_token', token, {
                maxAge: 1000 * 60 * 60 * 24 * 7,
                httpOnly: true, 
                secure: process.env.NODE_ENV === 'development' ? false : true,
            })
            .json({
                success: true,
            });
    } catch (err) {
        next(err);
    }
    next();
}

const signup = async (req, res, next)  => {
    const { email, password } = req.body;

    if(!email || !password) {
        return badRequest(res);
    }

    if(!validatePassword(password)) {
        return badCreds(res);
    }

    if(!validateEmail(email)) {
        return badCreds(res);
    }

    try {
        const passwordHash = await User.prototype.generateHash(password);              
        //dont allow duplicate emails
        const [ user, created ] = await User.findOrCreate({
            where: {
                email: email,
            },
            defaults: {
                passwordHash: passwordHash, 
            }
        })
        if(!created) {
            return res.status(200).json({
                success: false,
                message: 'There is already an account associated with this email.',
            })
        }
        let token = jwt.sign(
            { 
                email: user.email,
            },
            process.env.SECRET_KEY,
            { 
                expiresIn: '7d',
                audience: 'node-token-auth-client',
                issuer: 'node-token-auth-server',
                subject: user.email,
            }
        );
        return res
            .status(200)
            .cookie('access_token', token, { 
                maxAge: 1000 * 60 * 60 * 24 * 7,
                httpOnly: true, 
                secure: process.env.NODE_ENV === 'development' ? false : true,
            })
            .json({
                success: true,
            });
    } catch(err) {
        next(err);
    }
    next();
}

const getUserInfo = (req, res, next) => {
    if(req.decoded) {
        return res.status(200).json({
            success: true,
            info: decoded,
        });
    } else {
        return res.status(401).json({
            success: false,
            message: 'Auth token is not supplied. You may need to log in.',
        });
    }
    next();
}

module.exports = {
    checkToken,
    login,
    signup,
    logout,
    getUserInfo,
};