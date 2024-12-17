import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vite.dev/config/
export default defineConfig(({command, mode}) => ({
  // 入口目录(包含index.html的目录)
  root: mode === 'production' ? path.resolve(__dirname, 'dist') : process.cwd(),
  // 公共资源访问路径
  base: '/',
  // 指定当前环境
  mode: mode,
  // 插件
  plugins: [vue()],
  // 构建配置
  build: {
    target: 'es2015', // 打包目标
    outDir: 'dist', // 打包输出目录
    assetsDir: 'assets', // 打包输出目录下的静态资源目录
    minify: true, // 是否压缩代码
    sourcemap: mode === 'production' ? false : true, // 只有开发环境生成 sourcemap
    // rollupOptions: {}, // 自定义rollup底层打包配置，与vite配置合并(自选)
    // lib: {}, // 库模式配置(自选)
  },
  // 解析配置
  resolve: {
    alias: { // 路径别名
      '@': path.resolve(__dirname, 'src'),
      '@utils': path.join(__dirname, 'src/utils'),
      '@components': path.join(__dirname, 'src/components'),
      '@assets': path.join(__dirname, 'src/assets')
    }
  },
  // 开发服务器配置(自选)
  server:{
    port: 3000,
    open: true, // 是否自动打开浏览器
    proxy: { // 代理服务器（开发环境解决跨域问题）
      '/api': {
        target: 'http://example.com',
        changeOrigin: true, // 改变请求头中的 Origin
        rewrite: (path) => path.replace(/^\/api/, '') // 重写路径, 去掉 /api
      }
    }
  },
  // CSS配置(自选)
  css: {
    preprocessorOptions: { // 预处理器配置
      scss: {
        additionalData: `@import "@/assets/styles/variables.scss";`
      }
    }
  }
}))
