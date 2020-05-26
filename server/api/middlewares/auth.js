const koajwt = require('koa-jwt');

const config = require('../../config');

exports.jwt = koajwt(config.jwt).unless({
  path: [/^\/api\/login/] // 登录，注册接口不需要验证
});

exports.authenticate = async (ctx, next) => {
  if (ctx.session && ctx.session.user) {
    ctx.request.user = ctx.session.user;
    return next();
  }

  // 获取判断jwt用户
  if (ctx.state.user) {
    ctx.request.jwtAuth = true;
    ctx.request.user = ctx.state.user;
    return next();
  }

  return next();
}
