import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
        path:'/8-1',
        name:'8-1',
        component:() => import('./classes/8-1.vue')
    },
    {
        path:'/8-2',
        name:'8-2',
        component:() => import('./classes/8-2.vue')
    }
  ]
})
