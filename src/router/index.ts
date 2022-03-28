import { createRouter, createWebHashHistory, NavigationGuard, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/home')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/login')
  },
  { path: '/', redirect: { name: 'Home' } },
  {
    path: "/:pathMatch(.*)*", // 注意此处 404页面匹配规则和以前不相同，得采用这种配置方式才行
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// router.beforeEach(
//     (
//         to: RouteLocationNormalized,
//         from: RouteLocationNormalized,
//         next: NavigationGuard
//     ) => {
        
// })
export default router

