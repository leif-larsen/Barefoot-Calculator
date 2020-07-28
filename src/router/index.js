import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import NotFound from '../components/NotFound.vue'
import Config from '../components/Configuration/Configuration.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/config',
    name: "Config",
    component: Config
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '*', 
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
