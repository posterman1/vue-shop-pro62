import Vue from 'vue'
import App from './App'
import router from './router'

// 引入global全局文件控制样式
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'
// 引入图标css样式
import './assets/fonts/iconfont.css'
// 引入element-ui组件库模块
import ElementUI from 'element-ui'
// 把element-ui注册给vue
Vue.use(ElementUI)
// 引入axios并做相关配置
import axios from 'axios'
// axios请求根地址
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 给axios配置给vue的￥http成员
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
