module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // 此处的写法，目的是为了 将 /api 替换成 http://localhost:8088
        target: 'http://localhost:3000',
        secure: false,  // 如果是https接口，需要配置这个参数
        // 允许跨域
        changeOrigin: true,
        ws: true,//是否代理websockets
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
