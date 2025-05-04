import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/PageHome.vue';
import Contact from '../views/PageContact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;