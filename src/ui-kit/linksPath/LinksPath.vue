<script lang="ts" setup>
import getPathsFromUrl from "../../features/getPathsFromUrl";
import { RouterLink } from "vue-router";

const paths = getPathsFromUrl();
const lastPath = paths[paths.length - 1][1]
</script>

<template>
    <div class="description-page__path">
        <template v-for="[name, link] in paths" :key="name">
            <RouterLink :to="link">{{name}}</RouterLink>
            <span v-if="lastPath !== link">-></span>
        </template>
    </div>
</template>

<style scoped>

</style>