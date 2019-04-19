const router = require('express').Router();

const users = require('./controller/users');
const posts = require('./controller/posts');
const comments = require('./controller/comments');
const likes = require('./controller/likes');
const follows = require('./controller/follows');

// route middleware to ensure user is logged in
// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();        
//     }
//     return res.sendStatus(401);
// }

// router.all('/api/*', isLoggedIn);

router.route('/api/users')
    .get(users.loadMany)
router.route('/api/users/:id')
    .get(users.loadOne)
    .put(users.addOne)
    .delete(users.deleteById)
router.route('/api/posts')
    .post(posts.addOne)
    .get(posts.loadMany)
router.route('/api/posts/:id')
    .get(posts.loadOne)
    .put(posts.addOne)
    .delete(posts.deleteById)
router.route('/api/comments')
    .put(comments.addOne)
    .delete(comments.deleteById)
router.route('/api/likes')
    .put(likes.addOne)
    .delete(likes.deleteById)
router.route('/api/follows')
    .put(follows.addOne)
    .delete(follows.deleteByUserIds)

module.exports = {
    router
}