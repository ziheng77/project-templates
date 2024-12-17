const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  // 部署应用包时的基本URL
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // 放置生成的静态资源的目录
  assetsDir: 'static',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /package\.json$/,
          type: 'json'
        }
      ]
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        '@utils': path.join(__dirname, 'src/utils'),
        '@components': path.join(__dirname, 'src/components'),
        '@assets': path.join(__dirname, 'src/assets')
      }
    }
  }
}) 