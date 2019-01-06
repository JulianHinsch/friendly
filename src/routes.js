const router = require('express').Router();

const users = require('./controller/users');
const posts = require('./controller/posts');
const comments = require('./controller/comments');
const likes = require('./controller/likes');

const requireAuthentication = (req, res, next) => {
    //if authenticated
    next()
    //else
    return res.sendStatus(401);
}

router.all('/api/*', requireAuthentication);

//users
router.route('/api/users')
    .get(users.loadMany)
router.route('/api/users/:id')
    .get(users.findOne)
    .put(users.addOne)
    .delete(users.deleteOne)

//posts
router.route('/posts')
    .get(posts.loadMany)
router.route('/api/posts/:id')
    .get(posts.loadOne)
    .put()
    .delete()

/
router.route('/api/users')
    .get()
    .put()
    .delete()

//posts
router.get('/api/posts', authCheck, );
router.put('/api/posts')
router.delete('/api/posts');

//comments
router.get('/api/comments')
router.put('/api/comments')
router.delete('/api/comments')

//likes

//api/profile?userid=xxx?page=1

module.exports = {
    router
}