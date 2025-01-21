import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Catalogue from '../components/Catalogue.vue'
import Contact from '../components/Contact.vue'
import Panier from '../components/panier/Panier.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/catalogue',
    name: 'Catalogue',
    component: Catalogue
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/panier',
    name: 'Panier',
    component: Panier
  },
  {
    path: '/recherche',
    name: 'Recherche',
    component: () => import('../views/Recherche.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})