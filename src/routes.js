const router = require('express').Router();

const users = require('./controller/users');
const posts = require('./controller/posts');
const comments = require('./controller/comments');
const likes = require('./controller/likes');
const follows = require('./controller/follows');

//TODO
const requireAuthentication = (req, res, next) => {
    //if authenticated
    next()
    //else
    return res.sendStatus(401);
}

router.all('*', requireAuthentication);

//users
router.route('/api/users')
    .get(users.loadMany)
router.route('/api/users/:id')
    .get(users.loadOne)
    .put(users.addOne)
    .delete(users.deleteById)

//posts
router.route('/posts')
    .get(posts.loadMany)
router.route('/api/posts/:id')
    .get(posts.loadOne)
    .put(posts.addOne)
    .delete(posts.deleteById)

//comments
router.route('/api/comments')
    .put(comments.addOne)
    .delete(comments.deleteById)

//likes
router.route('/api/likes')
    .put(likes.addOne)
    .delete(likes.deleteById)

//follows
router.route('/api/follows')
    .put(follows.addOne)
    .delete(follows.deleteByUserIds)

module.exports = {
    router
}