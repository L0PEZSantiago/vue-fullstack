import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue';
import ListOfBooksView from '../components/ListOfBooksView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/books',
      name: 'books',
      component: ListOfBooksView
    }
  ],
})

export default router
