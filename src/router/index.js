import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Xplorer',
    name: 'Xplorer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Xplorer.vue')
  },
  {
    path: '/Projects',
    name: 'Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  }, {
    path: '/Ybrnt',
    name: 'Ybrnt',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Ybrnt.vue')
  }, {
    path: '/Raahandel',
    name: 'Raahandel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Raahandel.vue')
  }, {
    path: '/AboutMe',
    name: 'AboutMe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutMe.vue')
  }, {
    path: '/Shape',
    name: 'Shape',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Shape.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    console.log(to, from);

    if (to.name.startsWith('products') && from.name.startsWith('products')) {
      return null;
    }

    return savedPosition || { x: 0, y: 0 };
  },
  routes,
});

/*
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
*/


export default router
