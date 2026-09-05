import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],

 scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
            el: to.hash,
            behavior: "smooth"
            })
        }, 300)
        })
    }

    return { top: 0 }
    }
})

export default router