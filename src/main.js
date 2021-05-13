
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/pages/Home.vue'
import Create from './components/pages/Home.vue'
import Posts from './components/pages/Home.vue'
import SinglePost from './components/SinglePost.vue'

const app=createApp(App)
app.component('SinglePost',SinglePost)

const routes = [
    {
        path:'./',
        component: Home,

    },
    {
        path:'./posts',
        component: Posts,

    },
    {
        path:'./create',
        component: Create,

    },
] 

    const router = createRouter({
        history:createWebHistory(),
        routes:routes
    })

// const router = createRouter({
//     history: createWebHistory(),
//     routes:routes

// })


app.use(router)
app.mount('#app')
