import Vue from 'vue';
import Vuex from 'vuex';
import cloneDeep from 'lodash/cloneDeep';

import {
    CREATE_BREADCRUMBS,
    UPDATE_BREADCRUMBS,
    GET_FOOD_AND_DRINKS,
    GET_FOOD_AND_DRINKS_DETAILS,
    UPDATE_FOOD_AND_DRINKS_DETAILS,
    SET_OVERLAY,
} from './mutation-types';
import { service } from '../data-service';

Vue.use(Vuex);

const state = {
    isOverlayEnabled: false,
    breadcrumbs: [],
    foodAndDrinks: [],
    foodAndDrinksDetails: {},
};

const mutations = {
    [CREATE_BREADCRUMBS](state, breadcrumbs) {
        state.breadcrumbs = breadcrumbs;
    },
    [GET_FOOD_AND_DRINKS](state, foodAndDrinks) {
        state.foodAndDrinks = foodAndDrinks;
    },
    [SET_OVERLAY](state, isOverlayEnabled) {
        state.isOverlayEnabled = isOverlayEnabled;
    },
    [GET_FOOD_AND_DRINKS_DETAILS](state, foodAndDrinksDetails) {
        state.foodAndDrinksDetails = foodAndDrinksDetails;
    },
    [UPDATE_FOOD_AND_DRINKS_DETAILS](state, foodAndDrinksDetails) {
        state.foodAndDrinksDetails = foodAndDrinksDetails;
    },
    [UPDATE_BREADCRUMBS](state, breadcrumb) {
        state.breadcrumbs.forEach(b => {
            if (!b.text && b.name === breadcrumb.name) {
                b.to += breadcrumb.id;
                b.text = breadcrumb.text;
            }
        });
    },
};

const actions = {
    createBreadcrumbs({ commit }, route) {
        const { breadcrumbs } = cloneDeep(route.meta);
        breadcrumbs.forEach(b => {
            b.link = true;
            b.exact = true;
        });
        commit(CREATE_BREADCRUMBS, breadcrumbs);
    },
    async getFoodAndDrinks({ commit }) {
        commit(SET_OVERLAY, true);
        const data = await service.getFoodAndDrinks();
        commit(SET_OVERLAY, false);
        commit(GET_FOOD_AND_DRINKS, data);
    },
    async getFoodAndDrinksDetails({ commit }, id) {
        commit(SET_OVERLAY, true);
        const data = await service.getFoodAndDrinksDetails(id);
        commit(SET_OVERLAY, false);
        commit(GET_FOOD_AND_DRINKS_DETAILS, data);
        commit(UPDATE_BREADCRUMBS, {
            text: data.name,
            name: 'food-and-drinks-details',
            id: data.id,
        });
    },
    async updateFoodAndDrinksDetails({ commit }, data) {
        commit(SET_OVERLAY, true);
        await new Promise(resolve => setTimeout(() => resolve(true), 1500));
        commit(SET_OVERLAY, false);
        commit(UPDATE_FOOD_AND_DRINKS_DETAILS, data);
    },
};

const getters = {};

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    mutations,
    actions,
    getters,
});
