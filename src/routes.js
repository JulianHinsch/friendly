const router = require('express').Router();

const crud = require('./middleware/crud');
const checkToken = require('./middleware/checkToken');
const checkPermissions = require('./middleware/checkPermissions');

const User = require('./model/database').models.User;
const Post = require('./model/database').models.Post;
const _Comment = require('./model/database').models._Comment;
const Reaction = require('./model/database').models.Reaction;
const Follow = require('./model/database').models.Follow;

const auth = require('./controller/auth');
const chat = require('./controller/chat');

router.route('/api/users/:id?').all(checkToken, checkPermissions, crud(User));
router.route('/api/posts/:id?').all(checkToken, checkPermissions, crud(Post));
router.route('/api/reactions/:id?').all(checkToken, checkPermissions, crud(Reaction));
router.route('/api/comments/:id?').all(checkToken, checkPermissions, crud(_Comment));
router.route('/api/follows/:id?').all(checkToken, checkPermissions, crud(Follow));
router.ws('/',checkToken, checkPermissions, chat.handleRequest)
router.post('/login', auth.login)
router.post('/signup', auth.signup)
router.post('/logout', auth.logout)

module.exports = router;