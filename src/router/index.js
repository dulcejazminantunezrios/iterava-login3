import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '../../firebase'

const routes = [{
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
            requiesAuth: true
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('../views/AboutView.vue'),
        meta: {
            requiesAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('C:/Users/MYD07/OneDrive/Escritorio/iterava-login3/src/views/LoginIterava.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login' && auth.currentUser) {
        next('/')
        return;
    }
    if (to.matched.some(record => record.meta.requiesAuth) && !auth.currentUser) {
        next('/login')
        return;
    }

    next();
})

export default router