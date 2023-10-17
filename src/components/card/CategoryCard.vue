<script lang="ts" setup>
import { RouterLink } from 'vue-router';
defineProps<{
    header: string,
    imagePath: string,
    link: string | object,
    position?: string
}>()
</script>

<template>
    <div class="category-card">
        <RouterLink :to="link">
            <div class="category-card__header">{{ header }}</div>
            <img :src="imagePath" class="category-card__image" />
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
    padding: 12px 12px 16px 12px;
    font-size: 18px;
    font-weight: 500;
    line-height: 136%;
}
.category-card__image {
    width: 100%;
}
</style>