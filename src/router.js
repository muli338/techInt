import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Sign from './components/Register.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path : '/', name: "home", component: Home},
        {path : '/login', name: "login", component: Login},
        {path: '/signup', name: "signup", component: Sign}
    ]
})

export default router;
