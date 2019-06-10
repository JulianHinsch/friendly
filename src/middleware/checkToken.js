const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    
    const { access_token_header_payload, access_token_signature } = req.cookies;

    if(access_token_header_payload && access_token_signature) {
        const token = `${access_token_header_payload}.${access_token_signature}`;
        jwt.verify(token, process.env.SECRET_KEY, {
            algorithms: ['HS256'],
            audience: 'node-token-auth-client',
            issuer: 'node-token-auth-server',
            maxAge: '7d',
        }, (err, decoded) => {
            if (err) {
                console.log(err);
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
        return res.status(401).json({
            success: false,
            message: 'Auth token is not supplied. You may need to log in.'
        })
    }
};
