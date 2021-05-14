import { createApp } from 'vue';
import App from './App.vue';
import Home from './components/pages/Home.vue';
import Posts from './components/pages/Posts.vue';
import CreatePost from './components/pages/CreatePost.vue';
import PostDetails from './components/pages/PostDetails.vue';
import Transaction from './components/pages/Transaction.vue';
import TransDetails from './components/pages/TransDetails.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/posts',
        component: Posts,
    },
    {
        path:'/posts/:id',
        component: PostDetails,
    },
    {
        path: '/createpost',
        component: CreatePost,
    },
    {
        path: '/transaction',
        component: Transaction,
    },
    {
        path: '/transactiond',
        component: TransDetails,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
