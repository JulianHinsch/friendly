const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const User = require('../model/database').models.User;

const { validateEmail, validatePassword } = require('./../utils/validators');

//helper functions

const badRequest = (res) => res.status(400).json({
    success: false,
    message: 'Authentication failed! Please check the request',
});

const badCreds = (res) => res.status(403).json({
    success: false,
    message: 'Invalid email or password',
});

const authSuccess = (res, token) => {
    const tokenArr = token.split('.');
    return res
        .status(200)
        .cookie('access_token_header_payload', `${tokenArr[0]}.${tokenArr[1]}`, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true, 
            secure: process.env.NODE_ENV !== 'development',
        })
        .cookie('access_token_signature', tokenArr[2], {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            secure: process.env.NODE_ENV !== 'development',
        })
        .json({
            success: true,
        });
}

const createToken = (user) => jwt.sign(
    { 
        id: user.id,
        name: user.name,
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

//route handlers

const logout = (req, res, next) => {
    return res
        .status(200)
        .cookie('access_token_header_payload', null, {
            maxAge: 0,
            overwrite: true,
        })
        .cookie('access_token_signature', null, {
            maxAge: 0,
            overwrite: true,
        })
        .json({
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

        return authSuccess(res, createToken(user));
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

    if(!validatePassword(password) || !validateEmail(email)) {
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
        return authSuccess(res, createToken(user));
    } catch(err) {
        next(err);
    }
    next();
}

module.exports = {
    login,
    signup,
    logout,
};