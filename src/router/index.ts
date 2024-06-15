import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/brands',
      name: 'brands',
      component: () => import('../views/BrandsView.vue')
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: () => import('../views/DeliveryView.vue')
    },
    {
      path: '/refund',
      name: 'refund',
      component: () => import('../views/RefundView.vue')
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: () => import('../views/DocumentationView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/UserProfile.vue'),
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/OrdersView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
    },
    {
      path: '/cataloge',
      name: 'cataloge',
      component: () => import('../views/CategoreCatalogeView.vue'),
    },
    {
      path: '/cataloge/:category',
      name: 'category',
      component: () => import('../views/ProductCatalogeView.vue')
    },
    {
      path: '/cataloge/:category/:subcategory',
      name: 'subcategory',
      component: () => import('../views/ProductCatalogeView.vue')
    },
    {
      path: '/cataloge/:category/:subcategory/:product',
      name: 'product',
      component: () => import('../views/ProductInfoView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFoundView.vue')
    },
  ]
})

export default router
