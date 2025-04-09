import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue';
import ListOfBooksView from '../components/ListOfBooksView.vue';
import DetailsBook from '@/components/DetailsBook.vue';
import EditView from '@/components/EditView.vue';
import CreateView from '@/components/CreateView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list-of-books',
      name: 'list-of-books',
      component: ListOfBooksView
    },
    {
      path: '/list-of-books/:bookId',
      name: 'bookDetails',
      component: DetailsBook
    },
    {
      path: '/list-of-books/:bookId',
      name: 'edit',
      component: EditView
    },
    {
      path: '/create-book',
      name: 'create',
      component: CreateView
    }
  ],
})

export default router
