<template>
    <v-navigation-drawer :mini-variant="isMiniMode" :app="isApp" permanent>
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
            <v-list-item v-for="item in items" :key="item.title" link>
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
import { OPEN_SIDEBAR_EVENT } from '../constants';

export default {
    name: 'Sidebar',
    data() {
        return {
            isApp: true,
            items: [
                { title: 'Home', icon: 'mdi-home-city', link: '/dashboard' },
                { title: 'My Account', icon: 'mdi-account', link: '/about' },
            ],
            isMiniMode: true,
        };
    },
    methods: {
        openClose() {
            this.isMiniMode = !this.isMiniMode;
            this.$root.$emit(OPEN_SIDEBAR_EVENT, this.isMiniMode);
        },
    },
};
</script>

<style lang="scss" scoped></style>
