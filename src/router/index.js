import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'
import AddEventView from '../views/AddEventView'
import EventView from '../views/EventView'
import ParticipantView from '../views/ParticipantView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  },
  {
    path: '/addevent',
    name: 'addEventView',
    component: AddEventView
  },
  {
    path: '/event',
    name: 'eventView',
    component: EventView
  },
  {
    path: '/participant',
    name: 'participantView',
    component: ParticipantView
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
