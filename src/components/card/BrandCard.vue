<script lang="ts" setup>
import { RouterLink } from 'vue-router';
defineProps({
    item: { type: Object, required: true},
    position: String
})
</script>

<template>
    <div class="brand-card">
        <RouterLink :to="'/'">
            <img :src="item.imagePath" alt="brand"/>
        </RouterLink>
    </div>
</template>

<style scoped>
.brand-card {
    border: 1px solid  #E8E9EA;
}
.brand-card img {
    width: 100%;
}
</style>