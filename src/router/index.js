import { createRouter, createWebHistory } from 'vue-router'
import Home from './../components/Home.vue'
import Cart from '@/views/Cart.vue'

const routes=[
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      name: 'Cart',
      component: Cart
    }
  ] 


const router = createRouter({
  history:createWebHistory(),
  routes,
})
export default router
 