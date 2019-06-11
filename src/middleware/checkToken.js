const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    if (
        req.cookies[jwt_header] && 
        req.cookies[jwt_payload] &&
        req.cookies[jwt_signature]
    ) {
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
