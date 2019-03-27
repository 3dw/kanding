import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Links from '@/components/Links'
import Notes from '@/components/Notes'
import Docs from '@/components/Docs'
import Vedios from '@/components/Vedios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/notes',
      name: 'Notes',
      component: Notes
    },
    {
      path: '/links',
      name: 'Links',
      component: Links
    },
    {
      path: '/docs',
      name: 'Docs',
      component: Docs
    },
    {
      path: '/vedios',
      name: 'Vedios',
      component: Vedios
    }
  ]
})
