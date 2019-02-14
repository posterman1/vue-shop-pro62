import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 路由中配置使用Login组件
import Login from '@/components/Login'

import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/login', component: Login },
    { path: '/home', component: Home}
  ]
})
