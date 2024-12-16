import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesView from '@/views/MoviesView.vue';
import AboutView from '@/views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/movies',
      name: 'Movies',
      component: MoviesView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    }
  ],
})

export default router
