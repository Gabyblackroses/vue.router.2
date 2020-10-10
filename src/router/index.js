import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import Contact from '../views/Contact.vue'
import RecentPosts from '../views/RecentPosts.vue'
import NotFound from '../views/NotFound.vue'
import Administrador from '../views/Administrador.vue'

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
    path: '/sobremi',
    name: 'SobreMi',
    component: AboutMe,
    alias:['/acerca']

  },

  {
    path: '/contacto',
    name: 'Contacto',
    component: Contact
  },
    {
      path: '/contactame',
      redirect: {name: 'Contacto'}
    },
  {
    path: '/post/:number',
    name: 'RecentPosts',
    component: RecentPosts
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/administrador/:admin',
    name: 'Administrador',
    component: Administrador,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
