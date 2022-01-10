import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Shop = () => import('../views/shop/Shop')
const Community = () => import('../views/community/Community')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')
const Login = () => import('../views/login/Login')
// 1.安装插件
Vue.use(VueRouter)


// 2.创建router
const routes = [
  {
    path: "",
    redirect: "/login"
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/community',
    component: Community
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
  {
    path: '/login/',
    component: Login
  }
]
const router = new VueRouter({
  routes,
  mode: "history",
})

export default router
