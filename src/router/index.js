import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Docs from '@/components/Docs'
import Links from '@/components/Links'
import Photos from '@/components/Photos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/docs',
      name: 'Docs',
      component: Docs
    },
    {
      path: '/links',
      name: 'Links',
      component: Links
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos
    }
  ]
})
