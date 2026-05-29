import { createRouter, createWebHistory } from 'vue-router'

import LandingView from '@/modules/public/submodules/home/views/LandingView.vue';
import AccountView from '@/modules/public/submodules/profiles/views/AccountView.vue';
import RecordsView from '@/modules/public/views/RecordsView.vue';

// Aquí están las importaciones con los nombres reales de tus carpetas
import SessionView from '@/modules/auth/views/SessionView.vue';
import AdminView from '@/modules/admin/views/AdminView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: LandingView },
    { path: '/perfil', name: 'perfil', component: AccountView },
    { path: '/registros', name: 'registros', component: RecordsView },
    { path: '/login', name: 'login', component: SessionView },
    { path: '/admin', name: 'admin', component: AdminView }
  ]
})

export default router