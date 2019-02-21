import Vue from 'vue'
import router from 'vue-router'
import index from '../pages/index'
import detail from '../pages/detail'

Vue.use(router)

const routes = [
  //默认进入后的跳转
  { 
    path: '',
    redirect: '/index'
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/detail',
    component: detail
  }
]

export default new router({
  routes: routes,
  // 切换路由时，页面滚动相关
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition // 触发浏览器前进后退
    } else {
      return { x: 0, y: 0 } //滚动到顶部
    }
  }
})
