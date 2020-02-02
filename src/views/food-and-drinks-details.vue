<template>
    <div>
        <v-card class="text-left">
            <v-container fluid>
                <h3 class="mb-6">{{ foodAndDrinksDetails.name }} details</h3>
                <v-row>
                    <v-col cols="6">
                        <v-row>
                            <v-col cols="10">
                                <v-text-field dense label="Name" v-model="details.name"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="10">
                                <v-text-field dense label="Calories" v-model="details.calories"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="10">
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
                    </v-col>
                    <v-col cols="6">
                        <v-row>
                            <v-col cols="10">
                                <v-textarea label="Description" v-model="details.description"></v-textarea>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn class="ma-2" color="primary" tile @click="update(details)">Update</v-btn>
                        <v-btn class="ma-2" tile @click="update()">Cancel</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
        <ConfirmationDialog ref="dialog" />
    </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';
import ConfirmationDialog from '@/components/confirmation-dialog.vue';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'FoodAndDrinksDetails',
    components: { ConfirmationDialog },
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
        update: () => {},
    },
    async beforeRouteLeave(_to, _from, next) {
        next(
            await this.$refs.dialog.open({
                text: `Are you sure want to leave current page? All unsaved changes will be lost.`,
            }),
        );
    },
};
</script>

<style scoped></style>
