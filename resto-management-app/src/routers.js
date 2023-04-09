import { createRouter, createWebHistory } from 'vue-router'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/Login.vue'
import Home from './components/Home.vue'
import AddPage from './components/Page-AddPage.vue'
import UpdatePage from './components/Page-UpdatePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: Home
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: LoginPage
        },
        {
            path: '/add',
            name: 'AddPage',
            component: AddPage
        },
        {
            path: '/update/:restaurantID',
            name: 'UpdatePage',
            component: UpdatePage
        }
    ]
})

export default router