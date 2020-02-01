<template>
    <div>
        <v-card class="text-left" v-if="!isLoading">
            <v-container fluid>
                <h3 class="mb-6">{{ foodAndDrinksDetails.name }} details</h3>
                <v-row>
                    <v-col cols="4">
                        <v-text-field
                            dense
                            label="Name"
                            v-model="details.name"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-text-field
                            dense
                            label="Calories"
                            v-model="details.calories"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-select
                            dense
                            :items="categories"
                            label="Category"
                            item-text="name"
                            item-value="id"
                            v-model="details.category"
                        ></v-select>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'FoodAndDrinksDetails',
    data() {
        return {
            details: {},
            categories: [
                {
                    id: '1',
                    name: 'pizza',
                },
                {
                    id: '2',
                    name: 'pasta',
                },
                {
                    id: '3',
                    name: 'beer',
                },
                {
                    id: '4',
                    name: 'soup',
                },
                {
                    id: '5',
                    name: 'dessert',
                },
            ],
        };
    },
    async created() {
        await this.getFoodAndDrinksDetails(this.$route.params.id);
        this.details = cloneDeep(this.foodAndDrinksDetails);
    },
    computed: {
        ...mapState(['foodAndDrinksDetails']),
    },
    methods: {
        ...mapActions(['getFoodAndDrinksDetails']),
    },
};
</script>

<style scoped></style>
