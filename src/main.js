import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue';
import Login from './pages/Login.vue'
import { useAuth } from './composables/auth';

const router = createRouter({
    routes: [
        {
            path: '/',
            component: Home,
            // redirect: to => {
            //     if (false) {
            //         return '/login'
            //     }
            //     return to;
            // }
        },
        {
            path: '/login',
            component: Login,
        },
    ],
    history: createWebHistory(),
});

const { isAuthed } = useAuth();

router.beforeEach((to) => {
    if (to.path == '/' && !isAuthed.value) {
        return { path: '/login' };
    }
    return true;
});

createApp(App).use(router).mount('#app')
