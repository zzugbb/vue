import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/Login.vue'

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
    }  
    // },
    // {
    //   // path: '/about',
    //   // name: 'about',
    //   // component: () => import('../views/About.vue')
    // }
  ]
})
