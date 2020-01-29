<template>
    <div>
        <h1>FOOD DETAILS</h1>
    </div>
</template>

<script>
export default {
    name: 'food-and-drinks-details',
    beforeCreate() {
        console.log(this.$route.params);
    },
};
</script>

<style scoped></style>
