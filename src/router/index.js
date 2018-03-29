import 'babel-polyfill'
import Vue from 'vue'
import Router from 'vue-router'
import Eat from '@/components/Eat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Eat',
      component: Eat
    }
  ]
})
