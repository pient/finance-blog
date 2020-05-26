const Koa = require('koa');
const app = new Koa();

const config = require('./config');
app.context.config = config;

app.use(require('koa-bodyparser')());
app.use(require('koa-logger')());
app.use(require('koa-json')());

app.use(require('./api/middlewares/session').initialize);
app.use(require('./api/middlewares/auth').jwt);
app.use(require('./api/middlewares/auth').authenticate);

// 加载路由
const router = require('./routes');
app
  .use(router.routes())
  .use(router.allowedMethods());

require('koa-onerror')(app);

const port = config.port;
app.listen(port);
console.log(`listening on port ${port}`);
