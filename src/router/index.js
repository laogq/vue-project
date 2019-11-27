import Vue from 'vue'
import Router from 'vue-router'
import container from '@/container/container'
import login from '@/module/login'
import register from '@/module/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/container',
        name: 'Container',
        component: container
      },
   {
       path: '/login',
       name: 'login',
       component: login
   },
   {
    path: '/register',
    name: 'register',
    component: register
}
  ]
})
