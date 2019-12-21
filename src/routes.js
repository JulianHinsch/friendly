const   router = require('express').Router();

const   checkToken = require('./middleware/checkToken'),
        checkPermissions = require('./middleware/checkPermissions');

const   search = require('./controller/search'),
        auth = require('./controller/auth'),
        chat = require('./controller/chat'),
        feed = require('./controller/feed'),
        profile = require('./controller/profile'),
        users = require('./controller/users'),
        posts = require('./controller/posts'),
        comments = require('./controller/comments'),
        reactions = require('./controller/reactions'),
        follows = require('./controller/follows');

router.post('/login', auth.login);
router.post('/signup', auth.signup);
router.post('/logout', auth.logout);

router.ws('/', checkToken, checkPermissions, chat.handleRequest);

router.get('/api/search', search.handleSearch);

router.get('/api/feed/:userId', checkToken, checkPermissions, feed._get);

router.route('/api/profile/:userId').all(checkToken, checkPermissions, profile._get)

router.route('/api/users/:id?').all(checkToken, checkPermissions)
    .delete(users._delete);

router.route('/api/posts/:id?').all(checkToken, checkPermissions)
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