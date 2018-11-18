/**
 */
import Router from 'vue-router'
import ViewHome from '@components/xianyu/assets/views/home.vue'
import ViewTopic from '@components/xianyu/assets/views/topic.vue'
import ViewClass from '@components/xianyu/assets/views/class.vue'
import ViewShop from '@components/xianyu/assets/views/shop.vue'
import ViewMy from '@components/xianyu/assets/views/my.vue'

import GoodsDetail from '@components/xianyu/assets/components/Pages/GoodsDetail.vue'

import Chat from '@components/xianyu/assets/components/Pages/Chat.vue'
import ChatList from '@components/xianyu/assets/components/Pages/ChatList.vue'

import Pay from '@components/xianyu/assets/components/Pages/Pay.vue'
import Addr from '@components/xianyu/assets/components/Pages/Addr.vue'
import Category from '@components/xianyu/assets/components/Pages/Category.vue'

import MyPublish from '@components/xianyu/assets/components/My/MyPublish.vue'

Vue.use(Router)


export default new Router({
  // mode: 'abstract',
  routes: [{
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
  },
  {
    path: '/goodsdetail',
    component: GoodsDetail
  },
  {
    path: '/chat',
    component: Chat
  },
  {
    path: '/pay',
    component: Pay
  },
  {
    path: '/addr',
    component: Addr
  },
  {
    path: '/chatlist',
    component: ChatList
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/mypublish',
    component: MyPublish
  },



  {
    path: '/',
    redirect: '/home'
  }
  ]
})