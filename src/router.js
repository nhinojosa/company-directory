import {createRouter, createWebHistory} from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/LoginPage.vue'

// here is the path for the MainPage and LoginPage
// this must be renamed in order to find the path.
const routes = [
    { path: '/', component: MainPage },
    { path: '/login', component: LoginPage },
  ]

  export defualt createRouter ({
    history: createWebHistory(),
    routes,
})