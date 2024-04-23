import HomePage from './components/HomePage.vue';
import Cart from './components/Cart.vue';

export const routes = [
    {
        path: "/",
        name: "home-page",
        component: HomePage,
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart
    }
]
