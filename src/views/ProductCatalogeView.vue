<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import ProductMenu from '../components/product-menu/ProductMenu.vue';
import buildPath from '../features/buildPath';
const paths = buildPath();
</script>

<template>
    <main>
        <RouterLink v-for="path in paths" :key="path" :to="path">{{ path }} -></RouterLink>
        <section>
            <ProductMenu />
        </section>
    </main>
</template>

<style scoped>

</style>