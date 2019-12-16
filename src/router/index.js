import Vue from 'vue'
import VueRouter from 'vue-router'

// 禁止全局路由错误处理打印
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
//   }
const Home = () =>
  import ('../views/home/Home.vue')
const Category = () =>
  import ('../views/category/Category.vue')
const Cart = () =>
  import ('../views/cart/Cart.vue')
const Profile = () =>
  import ('../views/profile/Profile.vue')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3.导出router
export default router