import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dice from '../views/Dice.vue'
import Account from '../views/Account.vue'
import nothing from '../views/nothing.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Dice',
    name: 'Dice',
    component: Dice
  },
  {
    path: '/Account',
    name: 'Account',
    component: Account
  },
  {
    path: '/nothing',
    name: 'nothing',
    component: nothing
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
