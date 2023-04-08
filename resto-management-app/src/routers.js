import { createRouter, createWebHistory } from 'vue-router'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: Home
        },
        {
            path: '/sign-up',
            name: 'SignUp',
            component: SignUp
        }
    ]
})

export default router