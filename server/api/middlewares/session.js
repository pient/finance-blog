
// 加载session中间件
const session = require('koa-session-minimal');
const MySQLSessionStore = require('koa-mysql-session');

const config = require('../../config');

// session存储配置
const sessionConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
};

exports.initialize = session({
  key: 'zto-fb-sid',
  store: new MySQLSessionStore(sessionConfig),
  cookie: config.session.cookie
});