
exports.isAuthenticated = async (ctx, next) => {
  if (ctx.request.noAuthenticate === true) {
    return next();
  }

  if (!ctx.request.user) {
    ctx.throw(401, '用户未认证');
  }

  return next();
}
