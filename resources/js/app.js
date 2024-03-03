import './bootstrap';
import { createApp } from 'vue';
// import { App } from './App.Vue';

import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

import store from './store';

const app = createApp({});

const router = createRouter({
    history: createWebHistory(),
    routes
})

import HomePage from './components/HomePage.vue';
app.component('homepage', HomePage);

app.use(router);
app.use(store);
app.mount('#app');
