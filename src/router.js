import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import CardDetails from './views/CardDetails.vue';
import LoginPage from './views/LoginPage.vue';
import SettingsPage from './views/SettingsPage.vue';
import Contact from './views/Contact.vue';

import { useAuth } from './composables/useAuth'
const { isAuthenticated } = useAuth()

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/recipes/:id', name: 'CardDetails', component: CardDetails },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/settings', name: 'SettingsPage', component: SettingsPage, meta: {requiresAuth: true} },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// navigation guard
router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({name: 'LoginPage', query: {redirect: to.fullPath}})
  } else {
    next()
  }
})

export default router