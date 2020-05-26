const config = {
  // 启动端口
  port: 3000,

  session: {
    cookie: {
      httpOnly: true
    }
  },

  jwt: {
    secret: '857e63c5-31ed-4db2-a27c-e476dbad85f6',
    // passthrough: true,
    audience: 'http://fb.zto.com/audience',
    issuer:   'http://fb.zto.com/issuer'
  },

  // 数据库配置
  database: {
    DATABASE: 'zto_finance_blog',
    USERNAME: 'root',
    PASSWORD: '1234Qwer',
    PORT: '3306',
    HOST: 'localhost'
  }
}

module.exports = config