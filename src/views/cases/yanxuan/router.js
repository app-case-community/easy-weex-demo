/**
 * Created by zwwill on 2017/8/29.
 */
import Router from 'vue-router'
import ViewHome from '@components/yanxuan/assets/views/home.vue'
import ViewTopic from '@components/yanxuan/assets/views/topic.vue'
import ViewClass from '@components/yanxuan/assets/views/class.vue'
import ViewShop from '@components/yanxuan/assets/views/shop.vue'
import ViewMy from '@components/yanxuan/assets/views/my.vue'

Vue.use(Router)


export default new Router({
  // mode: 'abstract',
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: ViewHome
  },
  {
    path: '/topic',
    component: ViewTopic
  },
  {
    path: '/class',
    component: ViewClass
  },
  {
    path: '/shop',
    component: ViewShop
  },
  {
    path: '/my',
    component: ViewMy
  }
  ]
})