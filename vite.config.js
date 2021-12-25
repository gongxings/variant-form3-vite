import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteSvgIcons from 'vite-plugin-svg-icons'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    //添加jsx/tsx支持
    vueJsx({}),

    viteSvgIcons({
      // Specify the icon folder to be cached
      iconDirs: [resolve(process.cwd(), 'src/icons/svg')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',
    }),

  ],

  resolve: {
    alias: {
        "@": resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.js', '.vue', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  },

  css: {
    preprocessorOptions: {
      scss: {
        /* 自动引入全局scss文件 */
        additionalData: '@import "./src/styles/global.scss";'
      }
    }
  }

})