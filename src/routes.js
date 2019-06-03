const router = require('express').Router();

const users = require('./controller/users');
const posts = require('./controller/posts');
const comments = require('./controller/comments');
const reactions = require('./controller/reactions');
const follows = require('./controller/follows');
const auth = require('./controller/auth');

router.route('/api/users/:id')
    .get(users.loadOne)
    .put(users.addOne)
    .delete(users._delete)
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
router.route('/api/reactions')
    .put(reactions.addOne)
    .delete(reactions.deleteById)
router.route('/api/follows')
    .put(follows.addOne)
    .delete(follows.deleteByUserIds)
router.route('/login')
    .post(auth.login)
router.route('/signup')
    .post(auth.signup)
router.route('/userinfo')
    .post(auth.getUserInfo)
router.route('/logout')
    .post(auth.logout)

module.exports = router;