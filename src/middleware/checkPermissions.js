// TODO
module.exports = (req, res, next) => {
    //console.log(req.decoded);
    /* if decoded token has userId that matches the object */
    return next();
    /* else if userId does not match the object but has an approved follow of the object owner */
    /* read only, or leave a comment/like */
    return next();

    return res.status(401).json({ message: 'Unauthorized' });
}