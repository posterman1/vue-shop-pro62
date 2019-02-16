import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 路由中配置使用Login组件
import Login from '@/components/Login'
import Home from '@/components/Home'
import Welcome from '@/components/Welcome'

Vue.use(Router)

var router = new Router({
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/login', component: Login },
    { path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [{ path: '/welcome', component: Welcome }
      ]}
  ]
})

// 给路由设置导航守卫
// 守卫中对token进行监听 有token可以执行否则跳转到登录页面
router.beforeEach((to, from, next) => {
  // 请求login就通过
  if (to.path === '/login') {
    return next()
  }
  // 请求非login就判断token
  var token = window.sessionStorage.getItem('token')
  if (!token) {
    return next('/login')
  }
  next()
})
export default router
