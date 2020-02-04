import * as axios from 'axios';

const getFoodAndDrinks = async () => {
    try {
        const response = await axios.get('/mocks/food-and-drinks.json');
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const getFoodAndDrinksDetails = async id => {
    try {
        const response = await axios.get('/mocks/food-and-drinks.json');
        const data = response.data.find(item => item.id === id);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const createFoodAndDrinks = async data => {
    try {
        const response = await new Promise(resolve => {
            return setTimeout(() => resolve(Object.assign({}, data)), 700);
        });
        return response;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const getFoodAndCategories = async () => {
    try {
        const response = await axios.get(
            `/mocks/food-and-drinks-categories.json`,
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const service = {
    getFoodAndDrinks,
    getFoodAndDrinksDetails,
    createFoodAndDrinks,
    getFoodAndCategories,
};
