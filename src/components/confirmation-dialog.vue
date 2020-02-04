<template>
    <div>
        <v-dialog v-model="isOpen" persistent max-width="350">
            <v-card>
                <v-card-title class="headline">
                    {{ options.title }}
                </v-card-title>
                <v-card-text>{{ options.text }}</v-card-text>
                <v-card-actions>
                    <v-btn
                        class="ma-2"
                        color="primary"
                        tile
                        @click="close(true)"
                    >
                        {{ options.acceptBtnText }}
                    </v-btn>
                    <v-btn class="ma-2" tile @click="close(false)">
                        {{ options.cancelBtnText }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'ConfirmationDialog',
    data() {
        return {
            isOpen: false,
            resolve: null,
            options: {
                title: 'Confirmation',
                text: 'Are you sure ?',
                acceptBtnText: 'Accept',
                cancelBtnText: 'Cancel',
            },
        };
    },
    methods: {
        close: function(val) {
            this.isOpen = false;
            this.resolve(val);
        },
        open: function(options) {
            this.isOpen = true;
            this.options = Object.assign(this.options, options);
            return new Promise(resolve => (this.resolve = resolve));
        },
    },
};
</script>

<style scoped></style>
