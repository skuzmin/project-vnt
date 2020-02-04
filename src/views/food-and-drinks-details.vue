<template>
    <div>
        <v-card class="text-left">
            <v-container fluid>
                <h3 class="mb-6">{{ foodAndDrinksDetails.name }} details</h3>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-row>
                        <v-col cols="6">
                            <v-row>
                                <v-col cols="10">
                                    <v-text-field
                                        dense
                                        :rules="validationRules.nameRules"
                                        label="Name"
                                        v-model="details.name"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="10">
                                    <v-text-field
                                        dense
                                        label="Calories"
                                        :rules="validationRules.caloriesRules"
                                        v-model="details.calories"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="10">
                                    <v-select
                                        dense
                                        :items="foodAndDrinksCategories"
                                        label="Category"
                                        item-text="name"
                                        item-value="id"
                                        v-model="details.categoryId"
                                    ></v-select>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row>
                                <v-col cols="10">
                                    <v-textarea
                                        label="Description"
                                        :rules="validationRules.descriptionRules"
                                        v-model="details.description"
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-btn
                                class="ma-2"
                                color="primary"
                                tile
                                :disabled="!valid"
                                @click="update(details)"
                            >Update</v-btn>
                            <v-btn class="ma-2" tile :to="'/food-and-drinks'">Cancel</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-container>
        </v-card>
        <ConfirmationDialog ref="dialog" />
    </div>
</template>

<script>
import { cloneDeep, isEqual } from 'lodash';
import { mapState, mapActions } from 'vuex';

import ConfirmationDialog from '@/components/confirmation-dialog.vue';
import { foodAndDrinksItemValidation } from '@/shared/mixins';

export default {
    name: 'FoodAndDrinksDetails',
    components: { ConfirmationDialog },
    mixins: [foodAndDrinksItemValidation],
    data() {
        return {
            valid: true,
            details: {},
        };
    },
    async created() {
        await this.getFoodAndDrinksDetails(this.$route.params.id);
        await this.getFoodAndDrinksCategories();
        this.details = cloneDeep(this.foodAndDrinksDetails);
    },
    computed: {
        ...mapState(['foodAndDrinksDetails', 'foodAndDrinksCategories']),
    },
    methods: {
        ...mapActions([
            'getFoodAndDrinksDetails',
            'getFoodAndDrinksCategories',
            'updateFoodAndDrinksDetails',
        ]),
        async update() {
            if (!this.$refs.form.validate()) {
                return;
            }
            await this.updateFoodAndDrinksDetails(this.details);
            this.$router.push('/food-and-drinks');
        },
    },
    async beforeRouteLeave(_to, _from, next) {
        let result = true;
        if (!isEqual(this.foodAndDrinksDetails, this.details)) {
            result = await this.$refs.dialog.open({
                text: `Are you sure want to leave current page? All unsaved changes will be lost.`,
            });
        }
        next(result);
    },
};
</script>

<style scoped></style>
