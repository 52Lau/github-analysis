import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import pageComponent from '@/components/pageComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
     }
    // ,{
    //   path:'/',
    //   name:'pageComponent',
    //   component:pageComponent
    // }
  ]
})
