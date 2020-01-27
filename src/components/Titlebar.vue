<template>
    <div class="titlebar" :class="{ 'sidebar-opened': !isMiniMode }">
        <div class="content">
            <v-breadcrumbs :items="items">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
        </div>
        <div class="toolbar-separator"></div>
    </div>
</template>

<script>
import { OPEN_SIDEBAR_EVENT } from '../constants';

export default {
    name: 'Titlebar',
    mounted() {
        this.$root.$on(OPEN_SIDEBAR_EVENT, event => (this.isMiniMode = event));
    },
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

<style lang="scss" scoped>
.titlebar {
    height: 48px;
    top: 0;
    right: 0;
    left: 80px;
    z-index: 5;
    position: fixed;
    transition: left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    &.sidebar-opened {
        left: 256px;
    }
    .content {
        height: inherit;
        display: flex;
        align-items: center;
    }
    .toolbar-separator {
        border-bottom: thin solid rgba(0, 0, 0, 0.12);
    }
}
</style>
