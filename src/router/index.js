import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import UsersList from '../pages/UsersList.vue'
import UserDetails from '../pages/UserDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/list',
      name: 'list_of_users',
      component: UsersList
    },
    { path: '/details/:id', name: 'user_details', component: UserDetails }
  ]
})

export default router
