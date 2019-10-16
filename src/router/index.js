import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/hello'
import Layout from '@/view/layout'
import Project from '@/view/project'
import Doc from '@/view/doc'
import Workbench from '@/view/workbench'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // 路由激活样式
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/management',
      name: 'Management',
      component: Layout,
      children: [
        {
          path: '/project',
          name: 'Project',
          component: Project
        },
        {
          path: '/doc',
          name: 'Doc',
          component: Doc
        },
        {
          path: '/workbench',
          name: 'Workbench',
          component: Workbench
        }
      ]
    },
    {
      // 和以上路由不符的地址，将重定向到首页
      path: '*',
      redirect: '/'
    }
  ]
})
