const router = require('express').Router();

const checkToken = require('./middleware/checkToken');
const checkPermissions = require('./middleware/checkPermissions');

const search = require('./controller/search');
const auth = require('./controller/auth');
const chat = require('./controller/chat');

const users = require('./controller/users');
const posts = require('./controller/posts');
const comments = require('./controller/comments');
const reactions = require('./controller/reactions');
const follows = require('./controller/follows');

router.get('/api/search', search.handleSearch);
router.post('/login', auth.login);
router.post('/signup', auth.signup);
router.post('/logout', auth.logout);
router.ws('/',checkToken, checkPermissions, chat.handleRequest);
router.route('/api/users/:id?').all(checkToken, checkPermissions)
    .get(users._get)
    .delete(users._delete)    
router.route('/api/posts/:id?').all(checkToken, checkPermissions)
    .get(posts._get)
    .post(posts._create)
    .delete(posts._delete);
router.route('/api/comments/:id?').all(checkToken, checkPermissions)
    .post(comments._create)
    .delete(comments._delete);
router.route('/api/reactions/:id?').all(checkToken, checkPermissions)
    .post(reactions._create)
    .delete(reactions._delete);
router.route('/api/follows/:id?').all(checkToken, checkPermissions)
    .post(follows._create)
    .patch(follows._update)
    .delete(follows._delete);

module.exports = router;