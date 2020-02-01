<template>
    <div>
        <v-app-bar app fixed elevate-on-scroll height="48px">
            <v-breadcrumbs :items="breadcrumbs">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
        </v-app-bar>
        <v-content>
            <v-divider></v-divider>
        </v-content>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Titlebar',
    computed: {
        ...mapState(['breadcrumbs']),
    },
};
</script>

<style lang="scss" scoped></style>
