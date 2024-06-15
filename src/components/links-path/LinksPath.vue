<script lang="ts" setup>
import { RouterLink, useRoute } from 'vue-router';
import { usePathStore } from '@/stores/pathStore';
import type { Ref } from 'vue';
interface PathProps {
    name: string,
    link: string
}
const route = useRoute();
console.log(route.path, route.params)
const pathStore = usePathStore();
const links: Ref<PathProps[]> = pathStore.getPath();
const lastLink = pathStore.getLastLink();
</script>

<template>
    <div class="links-path">
        <div class="link-group" v-for="link in links" :key="link.name">
            <RouterLink @click="() => pathStore.slicePath(link.name)" :to="link.link">
                {{ link.name }}
            </RouterLink>
            <div v-if="lastLink.link !== link.link" class="strelka">-></div>
        </div>
    </div>
</template>

<style scoped>
.links-path {
    display: flex;
}
.link-group {
    display: flex;
}
</style>