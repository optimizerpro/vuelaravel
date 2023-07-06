import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/Home.vue'),
    },
    {
        path: '/resume',
        name: 'resume',
        component: () => import('@/components/Resume.vue'),
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes,
});