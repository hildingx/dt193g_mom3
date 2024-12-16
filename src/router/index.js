import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieListView from '@/views/MovieListView.vue';
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
      path: '/movie-list',
      name: 'Movie List',
      component: MovieListView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    }
  ],
})

export default router
