const Router = require('koa-router');

const policies = require('./api/middlewares/policies');

const authController = require('./api/controllers/auth');
const usersController = require('./api/controllers/users');

const router = new Router();

// 添加前缀
router.prefix('/api');

router.post('/login', authController.login);
router.get('/logout', policies.isAuthenticated, authController.logout);

router.get('/user', usersController.get);

module.exports = router;