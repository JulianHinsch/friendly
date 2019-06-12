const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const { jwt_header, jwt_payload, jwt_signature } = req.cookies;

    if (jwt_header && jwt_payload && jwt_signature) {
        const token = `${jwt_header}.${jwt_payload}.${jwt_signature}`;
        jwt.verify(token, process.env.SECRET_KEY, {
            algorithms: ['HS256'],
            audience: 'node-token-auth-client',
            issuer: 'node-token-auth-server',
            maxAge: '7d',
        }, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: 'Auth token is malformed'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(401).json({
            success: false,
            message: 'Auth token is not supplied. You may need to log in.'
        })
    }
};
