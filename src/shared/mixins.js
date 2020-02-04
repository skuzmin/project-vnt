export const foodAndDrinksItemValidation = {
    data() {
        return {
            validationRules: {
                nameRules: [
                    v => !!v || 'Name is required',
                    v =>
                        (v && v.length <= 20) ||
                        'Name must be less than 20 characters',
                ],
                caloriesRules: [
                    v => !!v || 'Calories are required',
                    v => (v && !isNaN(v)) || 'Calories must be a number',
                ],
                categoriesRules: [v => !!v || 'Category is required'],
                descriptionRules: [
                    v =>
                        !v ||
                        (v && v.length <= 500) ||
                        'Name must be less than 500 characters',
                ],
            },
        };
    },
};
