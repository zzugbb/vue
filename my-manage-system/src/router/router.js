import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/Login.vue'
import Home from '../views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },  
    {
      path: '/home',
      component: Home,
      children: [{
        alias: '/',
        path: 'bill-list',
        component: () => import('../views/bill/BillList')
      }, {
        alias: '/',
        path: 'bill-add',
        component: () => import('../views/bill/BillAdd')
      }, {
        alias: '/',
        path: 'my',
        component: () => import('../views/my/My')
      }]
    }
  ]
})
