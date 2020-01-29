import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import(
                /* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'
            ),
    },
    {
        path: '/food-and-drinks',
        name: 'food-and-drinks',
        component: () =>
            import(
                /* webpackChunkName: "food-and-drinks" */ '../views/FoodAndDrinks.vue'
            ),
    },
    {
        path: '/food-and-drinks/:id',
        name: 'food-and-drinks-details',
        component: () =>
            import(
                /* webpackChunkName: "food-and-drinks" */ '../views/FoodAndDrinksDetails.vue'
            ),
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
