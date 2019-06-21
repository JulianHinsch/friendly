const router = require('express').Router();

const checkToken = require('./middleware/checkToken');
const checkPermissions = require('./middleware/checkPermissions');

const search = require('./controller/search');
const auth = require('./controller/auth');
const chat = require('./controller/chat');
const feed = require('./controller/feed');
const profile = require('./controller/profile');
const users = require('./controller/users');
const posts = require('./controller/posts');
const comments = require('./controller/comments');
const reactions = require('./controller/reactions');
const follows = require('./controller/follows');

//auth
router.post('/login', auth.login);
router.post('/signup', auth.signup);
router.post('/logout', auth.logout);

//chat
router.ws('/',checkToken, checkPermissions, chat.handleRequest);

//search
router.get('/api/search', search.handleSearch);

//feed
router.get('/api/feed/:userId', checkToken, checkPermissions, feed._get);

//profile
router.route('/api/profile/:userId').all(checkToken, checkPermissions, profile._get)

//users
router.route('/api/users/:id?').all(checkToken, checkPermissions)
    .delete(users._delete);

//posts
router.route('/api/posts/:id?').all(checkToken, checkPermissions)
    .post(posts._create)
    .delete(posts._delete);

//comments
router.route('/api/comments/:id?').all(checkToken, checkPermissions)
    .post(comments._create)
    .delete(comments._delete);

//reactions
router.route('/api/reactions/:id?').all(checkToken, checkPermissions)
    .post(reactions._create)
    .delete(reactions._delete);

//follows
router.route('/api/follows/:id?').all(checkToken, checkPermissions)
    .post(follows._create)
    .patch(follows._update)
    .delete(follows._delete);

module.exports = router;