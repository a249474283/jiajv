import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Regis from './views/Regis.vue'
import Login from './views/Login'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/regis',
      name: 'Regis',
      component: Regis
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
