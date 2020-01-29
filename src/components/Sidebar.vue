<template>
    <v-navigation-drawer :mini-variant="isMiniMode" app permanent>
        <v-list-item @click.stop="openClose()">
            <v-btn icon v-if="isMiniMode">
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>

            <v-list-item-title>John Leider</v-list-item-title>

            <v-btn icon @click.stop="openClose()">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
            <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                :to="item.link"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <template v-slot:append>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-settings</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Settings</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-logout</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Log Out</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </template>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'Sidebar',
    data() {
        return {
            items: [
                { title: 'Home', icon: 'mdi-home-city', link: '/dashboard' },
                {
                    title: 'Food & Drinks',
                    icon: 'mdi-food-fork-drink',
                    link: '/food-and-drinks',
                },
                { title: 'My Account', icon: 'mdi-account', link: '/about' },
            ],
            isMiniMode: true,
        };
    },
    methods: {
        openClose() {
            this.isMiniMode = !this.isMiniMode;
        },
    },
};
</script>

<style lang="scss" scoped></style>
