import Vue from 'vue'
import Router from 'vue-router'
import VisualOne from '../views/VisualOne'
import VisualTwo from '../views/VisualTwo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'VisualOne',
      component: VisualOne
    },
    {
      path: '/VisualTwo',
      name: 'VisualTwo',
      component: VisualTwo
    }
  ]
})
