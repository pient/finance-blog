const jsonwebtoken = require('jsonwebtoken');

const USER = {
  username: 'rayl',
  password: '123456',
  id: 100
};

exports.login = async (ctx) => {
  const jwtConfig = ctx.config.jwt;

  let { username, password, type } = ctx.request.body || {};
  let checkUser = (username === USER.username && password === USER.password);

  if (checkUser) {
    let userData = { name: USER.username, id: USER.id };

    ctx.body = {
      statusCode: 200,
      message: '登录成功'
    };

    if (type === 'jwt') {
      let jwtToken = jsonwebtoken.sign(
        userData,  // 加密userToken, 等同于上面解密的userToken
        jwtConfig.secret, 
        {
          audience: jwtConfig.audience,
          issuer: jwtConfig.issuer,
          expiresIn: '1h', // 有效时长1小时
        }  
      );

      ctx.body.result = {
        token: jwtToken
      }
    } else {
      ctx.session.user = userData;
    }
  } else {
    ctx.body = {
      statusCode: 400,
      message: '用户名密码不匹配'
    }
  };
}

exports.logout = async (ctx) => {
  ctx.session.user = null;

  ctx.body = {
    statusCode: 200,
    message: '登出成功'
  };
}
