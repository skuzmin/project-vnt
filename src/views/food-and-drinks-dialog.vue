<template>
    <div>
        <v-dialog v-model="isOpen" persistent max-width="500px">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on">New item</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">Add new food or drink</span>
                </v-card-title>
                <v-form ref="dialogForm" v-model="valid" lazy-validation>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                        dense
                                        :rules="validationRules.nameRules"
                                        label="Name"
                                        v-model="newItem.name"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                        dense
                                        label="Calories"
                                        :rules="validationRules.caloriesRules"
                                        v-model="newItem.calories"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12">
                                    <v-select
                                        dense
                                        :items="foodAndDrinksCategories"
                                        :rules="validationRules.categoriesRules"
                                        label="Category"
                                        item-text="name"
                                        item-value="id"
                                        v-model="newItem.categoryId"
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12">
                                    <v-textarea
                                        label="Description"
                                        :rules="validationRules.descriptionRules"
                                        v-model="newItem.description"
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            class="ma-2"
                            color="primary"
                            tile
                            :disabled="!valid || isLoading"
                            @click="create(newItem)"
                        >Create</v-btn>
                        <v-btn class="ma-2" tile @click="cancel()">Cancel</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import { foodAndDrinksItemValidation } from '@/shared/mixins';

export default {
    name: 'FoodAndDrinksDialog',
    mixins: [foodAndDrinksItemValidation],
    async created() {
        await this.getFoodAndDrinksCategories();
    },
    data() {
        return {
            isLoading: false,
            isOpen: false,
            valid: true,
            newItem: {},
        };
    },
    computed: {
        ...mapState(['foodAndDrinksCategories']),
    },
    watch: {
        isOpen() {
            if (this.$refs.dialogForm) {
                this.$refs.dialogForm.reset();
            }
        },
    },
    methods: {
        ...mapActions(['createFoodAndDrinks', 'getFoodAndDrinksCategories']),
        cancel() {
            this.isOpen = false;
        },
        async create(newItem) {
            if (!this.$refs.dialogForm.validate()) {
                return;
            }
            this.isLoading = true;
            const result = await this.createFoodAndDrinks(newItem);
            this.isLoading = false;
            this.isOpen = !result;
        },
    },
};
</script>

<style lang="scss" scoped></style>
