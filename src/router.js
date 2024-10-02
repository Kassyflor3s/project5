import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import CardDetails from './views/CardDetails.vue';
import LoginPage from './views/LoginPage.vue';
import SettingsPage from './views/SettingsPage.vue';
import Contact from './views/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/recipes/:id', name: 'CardDetails', component: CardDetails },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/settings', name: 'SettingsPage', component: SettingsPage },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router