<template>
    <div>
        <v-app-bar app fixed elevate-on-scroll height="48px">
            <v-breadcrumbs :items="items">
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
export default {
    name: 'Titlebar',
    data() {
        return {
            isMiniMode: true,
            items: [
                {
                    text: 'Dashboard',
                    disabled: false,
                    href: 'breadcrumbs_dashboard',
                },
                {
                    text: 'Link 1',
                    disabled: false,
                    href: 'breadcrumbs_link_1',
                },
                {
                    text: 'Link 2',
                    disabled: true,
                    href: 'breadcrumbs_link_2',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
