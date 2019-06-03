const atob = require('atob');

export default (req, res, next) => {
    const token = req.cookies['access_token'];
    if(token) {
        try {
            const decoded = atob(token.split('.')[1])
            req.decoded = decoded;
        } catch (error) {
            console.log(error);
        }
    }
    next();
}