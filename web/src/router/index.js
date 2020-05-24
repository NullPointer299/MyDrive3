import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Trash from "@/views/Trash";
import Search from "@/views/Search";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Trash',
    name: 'Trash',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Trash
  },
    {
      path: '/Search',
      name: 'Search',
      component: Search,
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:{
    color:'red',
    fontWeight:'bold'
  }
})

export default router
