module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  devServer: {
    open: true, //浏览器自动打开页面
    host: "localhost",
    port: 8880,
    https: false,
    hotOnly: false,
    // proxy: {
    //   //配置跨域
    //   '/login': {
    //     target: "http://localhost:8088",
    //     changOrigin:true,
    //     pathRewrite:{
    //       '^/login':'/'
    //     }
    //   }
    // }
  }

}
