import Vue from 'vue'
import Router from 'vue-router'
import ShopCart from './views/ShopCart.vue'
import Detali from './views/Detali.vue'
import UserCenter from './views/UserCenter.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/ShopCart',
      name: 'ShopCart',
      component: ShopCart
    },
    {
      path: '/Detali',
      name: 'Detali',
      component: Detali
    },
    {
      path: '/UserCenter',
      name: 'UserCenter',
      component: UserCenter
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
