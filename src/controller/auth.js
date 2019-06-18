const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const User = require('../model/database').models.User;

const { validateName, validateEmail, validatePassword } = require('./../utils/validators');

//helper functions

const badRequest = (res) => res.status(400).json({
    success: false,
    message: 'Authentication failed! Please check the request',
});

const authSuccess = (res, token) => {
    const tokenArr = token.split('.');
    const options = {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secure: process.env.NODE_ENV !== 'development',        
    }
    return res
        .status(200)
        .cookie('jwt_header', tokenArr[0], { httpOnly: true, ...options })
        .cookie('jwt_payload', tokenArr[1], options)
        .cookie('jwt_signature', tokenArr[2], { httpOnly: true, ...options })
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
    const options = { maxAge: 0, overwrite: true }
    return res
        .status(200)
        .cookie('jwt_header', null, options)
        .cookie('jwt_payload', null, options)
        .cookie('jwt_signature', null, options)
        .json({ success: true })
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
            return res.status(403).json({
                success: false,
                message: 'Invalid email or password',
            });
        }

        const isValid = await user.checkPassword(password);

        if(!isValid) {
            return res.status(403).json({
                success: false,
                message: 'Invalid email or password',
            });
        }

        return authSuccess(res, createToken(user));
    } catch (err) {
        next(err);
    }
    next();
}

const signup = async (req, res, next)  => {
    
    const { name, email, password } = req.body;
    console.log(name, email, password);

    if(!name || !email || !password) {
        return badRequest(res);
    }

    if( !validateName(name) ||
        !validateEmail(email) ||    
        !validatePassword(password)
    ) {
        return res.status(403).json({
            success: false,
            message: 'Request included invalid fields',
        });
    }

    try {
        const passwordHash = await User.prototype.generateHash(password);              
        //dont allow duplicate emails
        const [ user, created ] = await User.findOrCreate({
            where: {
                email: email,
            },
            defaults: {
                name,
                passwordHash, 
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