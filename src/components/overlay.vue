<template>
    <div>
        <v-overlay :value="isOverlayEnabled" :z-index="4">
            <v-progress-circular
                :size="100"
                color="primary"
                indeterminate
            ></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Overlay',
    computed: {
        ...mapState(['isOverlayEnabled']),
    },
};
</script>
