<template>
    <div>
        <v-data-table
            fixed-header
            :headers="headers"
            :items="foodAndDrinks"
            :items-per-page="itemsPerPage"
            :custom-sort="customSort"
            class="elevation-1"
        >
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-spacer></v-spacer>
                    <FoodAndDrinksDialog />
                </v-toolbar>
            </template>
            <template v-slot:item="{ item }">
                <tr class="text-left">
                    <router-link :to="`/food-and-drinks/${item.id}`" tag="td" class="link">
                        <a>{{ item.name }}</a>
                    </router-link>
                    <td>{{ item.calories }}</td>
                    <td>{{ getCategoryName(item.categoryId) }}</td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import FoodAndDrinksDialog from '@/views/food-and-drinks-dialog';

export default {
    name: 'FoodAndDrinks',
    components: { FoodAndDrinksDialog },
    async created() {
        await this.getFoodAndDrinks();
        await this.getFoodAndDrinksCategories();
    },
    data() {
        return {
            itemsPerPage: 20,
            headers: [
                { text: 'Name', value: 'name', align: 'left' },
                { text: 'Calories', value: 'calories', align: 'left' },
                { text: 'Category', value: 'category', align: 'left' },
            ],
        };
    },
    computed: {
        ...mapState(['foodAndDrinks', 'foodAndDrinksCategories']),
    },
    methods: {
        ...mapActions(['getFoodAndDrinks', 'getFoodAndDrinksCategories']),
        getCategoryName(id) {
            const category = this.foodAndDrinksCategories.find(
                i => i.id === id,
            );
            return (category && category.name) || 'N/A';
        },
        customSort(items, sortBy, sortDesc) {
            items.sort((a, b) => {
                if (sortBy[0] == 'category') {
                    if (!sortDesc[0]) {
                        return a[sortBy].name
                            .toLowerCase()
                            .localeCompare(b[sortBy].name.toLowerCase());
                    } else {
                        return b[sortBy].name
                            .toLowerCase()
                            .localeCompare(a[sortBy].name.toLowerCase());
                    }
                } else if (sortBy[0] == 'calories') {
                    if (!sortDesc[0]) {
                        return a[sortBy] - b[sortBy] - (b[sortBy] - a[sortBy]);
                    } else {
                        return b[sortBy] - a[sortBy] - (a[sortBy] - b[sortBy]);
                    }
                } else {
                    if (typeof a[sortBy] !== 'undefined') {
                        if (!sortDesc[0]) {
                            return a[sortBy]
                                .toLowerCase()
                                .localeCompare(b[sortBy].toLowerCase());
                        } else {
                            return b[sortBy]
                                .toLowerCase()
                                .localeCompare(a[sortBy].toLowerCase());
                        }
                    }
                }
            });
            return items;
        },
    },
};
</script>

<style scoped>
.link {
    color: #1976d2;
    cursor: pointer;
    text-decoration: underline;
}
</style>
