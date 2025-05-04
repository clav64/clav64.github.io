import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/PageHome.vue';
import Contact from '../views/PageContact.vue';

const routes = [
  { path: '/', component: Home, meta:{title:'Home - Chris Lavender BEng (Hons)'} },
  { path: '/contact', component: Contact, meta:{title:'Contact Me'} },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Update the tab title based on the current route
router.afterEach((to) => {
  document.title = to.meta.title || 'Default Title';
});


export default router;