module.exports = {
  configureWebpack: {
    resolve: {
      // 配置别名，src已经默认配置好了为@
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}