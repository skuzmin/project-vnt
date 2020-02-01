<template>
    <div id="app">
        <v-app>
            <Sidebar />
            <Titlebar />
            <v-content class="pt-0">
                <Overlay />
                <v-container fluid>
                    <router-view />
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
import Sidebar from '@/components/sidebar.vue';
import Titlebar from '@/components/titlebar.vue';
import Overlay from '@/components/overlay.vue';

export default {
    name: 'App',
    components: {
        Overlay,
        Sidebar,
        Titlebar,
    },
};
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
