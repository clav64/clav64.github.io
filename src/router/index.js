import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/PageHome.vue';
import Contact from '../views/PageContact.vue';
import Project1 from '../views/subview-projects/PageProjectOne.vue';
import Project2 from '../views/subview-projects/PageProjectTwo.vue';

const routes = [
  { path: '/', component: Home, meta:{title:'Home - Chris Lavender BEng (Hons)'} },
  { path: '/contact', component: Contact, meta:{title:'Contact Me'} },
  { path: '/projects/project1', component: Project1, meta:{title:'Project One - Hacker News>'} },
  { path: '/projects/project2', component: Project2, meta:{title:'Project 2 - Under Construction'} },
  // { path: '/:catchAll(.*)', redirect: '/' }
];

const router = createRouter({
  history: createWebHashHistory(), // Use hash mode
  routes
});

// Update the tab title based on the current route
router.afterEach((to) => {
  document.title = to.meta.title || 'Default Title';
});


export default router;