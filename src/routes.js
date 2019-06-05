const router = require('express').Router();

const crud = require('./middleware/crud');

const User = require('./model/database').models.User;
const Post = require('./model/database').models.Post;
const _Comment = require('./model/database').models._Comment;
const Reaction = require('./model/database').models.Reaction;
const Follow = require('./model/database').models.Follow;

const auth = require('./controller/auth');
const chat = require('./controller/chat');

router.route('/api/users/:id?').all(crud(User));
router.route('/api/posts/:id?').all(crud(Post));
router.route('/api/reactions/:id?').all(crud(Reaction));
router.route('/api/comments/:id?').all(crud(_Comment));
router.route('/api/follows/:id?').all(crud(Follow));
router.post('/login', auth.login)
router.post('/signup', auth.signup)
router.post('/logout', auth.logout)
router.get('/userinfo', auth.getUserInfo)
router.ws('/', chat.handleRequest)

module.exports = router;