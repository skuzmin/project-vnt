import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../store';
import { CREATE_BREADCRUMBS } from '../store/mutation-types';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
            breadcrumbs: [{ text: 'Dashboard', to: '/dashboard' }],
        },
        component: () =>
            import(
                /* webpackChunkName: "dashboard" */ '../views/dashboard.vue'
            ),
    },
    {
        path: '/food-and-drinks',
        name: 'food-and-drinks',
        meta: {
            breadcrumbs: [{ text: 'Food And Drinks', to: '/food-and-drinks' }],
        },
        component: () =>
            import(
                /* webpackChunkName: "food-and-drinks" */ '../views/food-and-drinks.vue'
            ),
    },
    {
        path: '/food-and-drinks/:id',
        name: 'food-and-drinks-details',
        meta: {
            breadcrumbs: [
                { text: 'Food And Drinks', to: '/food-and-drinks' },
                { name: 'food-and-drinks-details', to: '/food-and-drinks/' },
            ],
        },
        component: () =>
            import(
                /* webpackChunkName: "food-and-drinks" */ '../views/food-and-drinks-details.vue'
            ),
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            breadcrumbs: [{ text: 'About', to: '/about' }],
        },
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/about.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.afterEach(to => {
    store.dispatch(CREATE_BREADCRUMBS, to);
});

export default router;
