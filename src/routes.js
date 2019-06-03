const router = require('express').Router();

const crud = require('./middleware/crud');

const users = require('./controller/users');
const posts = require('./controller/posts');
const comments = require('./controller/comments');
const reactions = require('./controller/reactions');
const follows = require('./controller/follows');
const auth = require('./controller/auth');
const chat = require('./controller/chat');

router.route('/api/users/:id?').all(crud(users));
router.route('/api/posts/:id?').all(crud(posts));
router.route('/api/reactions/:id?').all(crud(reactions));
router.route('/api/comments/:id?').all(crud(comments));
router.route('/api/follows/:id?').all(crud(follows));
router.post('/login', auth.login)
router.post('/signup', auth.signup)
router.post('/logout', auth.logout)
router.get('/userinfo', auth.getUserInfo)
router.ws('/', chat.handleRequest)

module.exports = router;