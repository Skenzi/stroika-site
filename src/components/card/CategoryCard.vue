<script lang="ts" setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
    item: { type: Object, required: true},
    position: String
})
const headerText = 'Category'
</script>

<template>
    <div class="category-card">
        <RouterLink :to="'/'">
            <div class="category-card__header">{{ item.header || headerText }}</div>
            <img :src="item.imagePath" class="category-card__image" />
        </RouterLink>
    </div>
</template>

<style scoped>
.category-card {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border: none;
    background-color: #F6F6F6;;
}
.category-card__header {
    text-align: center;
}
.category-card__image {
    width: 100%;
}
</style>