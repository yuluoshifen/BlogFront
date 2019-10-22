import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Study from '@/view/study'
import Life from '@/view/life'
import Play from '@/view/play'
import Message from '@/view/message'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // 路由激活样式
  linkExactActiveClass : 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/study',
      name: 'study',
      component: Study,
      meta: {
        title: '学习心得'
      }
      // children: [
      //   {
      //     path: '/project',
      //     name: 'Project',
      //     component: Project
      //   },
      //   {
      //     path: '/doc',
      //     name: 'Doc',
      //     component: Doc
      //   },
      //   {
      //     path: '/workbench',
      //     name: 'Workbench',
      //     component: Workbench
      //   }
      // ]
    },
    {
      path: '/life',
      name: 'life',
      component: Life,
      meta: {
        title: '生活随笔'
      }
    },
    {
      path: '/play',
      name: 'play',
      component: Play,
      meta: {
        title: '游玩攻略'
      }
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      meta: {
        title: '畅所欲言'
      }
    },
    {
      // 和以上路由不符的地址，将重定向到首页
      path: '*',
      redirect: '/'
    }
  ]
})
