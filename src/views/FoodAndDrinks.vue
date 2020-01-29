<template>
    <div>
        <v-data-table
            fixed-header
            :headers="headers"
            :items="items"
            :items-per-page="itemsPerPage"
            :custom-sort="customSort"
            class="elevation-1"
        >
            <template v-slot:item="{ item }">
                <tr class="text-left">
                    <router-link :to="`/food-and-drinks/${item.id}`" tag="td" class="link">
                        <a>{{ item.name }}</a>
                    </router-link>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.category.name }}</td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    name: 'food-and-drinks',
    data() {
        return {
            itemsPerPage: 20,
            headers: [
                { text: 'Name', value: 'name', align: 'left' },
                { text: 'Calories', value: 'calories', align: 'left' },
                { text: 'Category', value: 'category', align: 'left' },
            ],
            items: [
                {
                    id: '1',
                    name: 'test1',
                    calories: 100,
                    category: { id: '1', name: 'pizza' },
                },
                {
                    id: '2',
                    name: 'test2',
                    calories: 200,
                    category: { id: '2', name: 'pasta' },
                },
                {
                    id: '3',
                    name: 'test3',
                    calories: 300,
                    category: { id: '3', name: 'beer' },
                },
                {
                    id: '4',
                    name: 'test4',
                    calories: 400,
                    category: { id: '4', name: 'soup' },
                },
                {
                    id: '5',
                    name: 'test5',
                    calories: 500,
                    category: { id: '5', name: 'dessert' },
                },
            ],
        };
    },
    methods: {
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
