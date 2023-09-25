import {createRouter, createWebHistory} from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import NotFound from '@/components/NotFound.vue'

// here is the path for the MainPage and LoginPage
// this must be renamed in order to find the path.
const routes = [
    { path: '/', name: 'Home', component: MainPage },
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/:pathMatch(.*)*', name: 'NotFound', componet: NotFound },
  ]

  export defualt createRouter({
    history: createWebHistory(),
    routes,
}) 