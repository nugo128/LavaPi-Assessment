import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import UsersList from '../pages/UsersList.vue'
import UserDetails from '../pages/UserDetails.vue'
import CreateUser from '../pages/CreateUser.vue'
import NotFound from '../pages/NotFound.vue'

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
    { path: '/details/:id', name: 'user_details', component: UserDetails },
    { path: '/create', name: 'create_user', component: CreateUser },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
